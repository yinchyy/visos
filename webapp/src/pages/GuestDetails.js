// src/pages/GuestDetails.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function GuestDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Dane tymczasowe
    const [guestData, setGuestData] = useState({
        id: id,
        firstName: 'Jan',
        lastName: 'Kowalski',
        email: 'jan.kowalski@example.com'
    });

    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGuestData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        alert(`Zapisano goscia: ${guestData.firstName} ${guestData.lastName}`);
        setEditMode(false);
    };

    const handleCancel = () => {
        navigate('/guests');
    };

    return (
        <div className="container">
            <h2>Szczegoly goscia (ID: {guestData.id})</h2>

            <div style={{ marginBottom: '20px' }}>
                <label>Imie: </label><br />
                {editMode ? (
                    <input
                        type="text"
                        name="firstName"
                        value={guestData.firstName}
                        onChange={handleChange}
                    />
                ) : (
                    <p>{guestData.firstName}</p>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Nazwisko: </label><br />
                {editMode ? (
                    <input
                        type="text"
                        name="lastName"
                        value={guestData.lastName}
                        onChange={handleChange}
                    />
                ) : (
                    <p>{guestData.lastName}</p>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Email: </label><br />
                {editMode ? (
                    <input
                        type="email"
                        name="email"
                        value={guestData.email}
                        onChange={handleChange}
                    />
                ) : (
                    <p>{guestData.email}</p>
                )}
            </div>

            {!editMode && (
                <button className="button" onClick={() => setEditMode(true)}>
                    Edytuj
                </button>
            )}
            {editMode && (
                <button
                    className="button"
                    onClick={handleSave}
                    style={{ marginRight: '10px' }}
                >
                    Zapisz
                </button>
            )}
            <button className="button" onClick={handleCancel} style={{ backgroundColor: '#ccc' }}>
                Cofnij
            </button>
        </div>
    );
}

export default GuestDetails;
