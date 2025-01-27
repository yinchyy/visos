// src/pages/ReservationDetails.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ReservationDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Tu w realnej aplikacji pobra�by� dane np. z API wed�ug `id`
    // Dla przyk�adu symulujemy jedn� rezerwacj�:
    const [reservationData, setReservationData] = useState({
        id: id,
        clientName: 'Jan Kowalski',
        roomNumbers: [101, 102],
        status: 'Oczekuj�ca',
        scheduledDate: '2025-02-10',
        // mo�na doda� inne pola jak w AddReservation
        email: 'jan.kowalski@example.com',
        phone: '123456789',
    });

    const [editMode, setEditMode] = useState(false);

    // Zmiana w polach (je�li edytujesz np. email, phone itp.)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // W realnej aplikacji -> zapisz na serwerze
        alert(`Zapisano zmiany rezerwacji ID=${reservationData.id}`);
        setEditMode(false);
    };

    const handleCancel = () => {
        // Cofnij do listy rezerwacji
        navigate('/reservations');
    };

    return (
        <div className="container">
            <h2>Szczeg�y Rezerwacji (ID: {id})</h2>
            <div style={{ marginBottom: '20px' }}>
                <label>Klient: </label><br />
                {editMode ? (
                    <input
                        type="text"
                        name="clientName"
                        value={reservationData.clientName}
                        onChange={handleChange}
                        style={{ width: '300px' }}
                    />
                ) : (
                    <p>{reservationData.clientName}</p>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Email: </label><br />
                {editMode ? (
                    <input
                        type="email"
                        name="email"
                        value={reservationData.email}
                        onChange={handleChange}
                        style={{ width: '300px' }}
                    />
                ) : (
                    <p>{reservationData.email}</p>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Telefon: </label><br />
                {editMode ? (
                    <input
                        type="tel"
                        name="phone"
                        value={reservationData.phone}
                        onChange={handleChange}
                        style={{ width: '300px' }}
                    />
                ) : (
                    <p>{reservationData.phone}</p>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Pokoje: </label><br />
                <p>{reservationData.roomNumbers.join(', ')}</p>
                {/* Tu mo�na by doda� edycj� pokoi, analogicznie jak w AddReservation */}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Data rezerwacji: </label><br />
                <p>{reservationData.scheduledDate}</p>
            </div>

            {/* Guziki */}
            {!editMode && (
                <button className="button" onClick={() => setEditMode(true)}>
                    Edytuj
                </button>
            )}
            {editMode && (
                <button className="button" onClick={handleSave} style={{ marginRight: '10px' }}>
                    Zapisz
                </button>
            )}
            <button className="button" onClick={handleCancel} style={{ backgroundColor: '#ccc' }}>
                Cofnij
            </button>
        </div>
    );
}

export default ReservationDetails;
