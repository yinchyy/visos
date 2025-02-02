// src/pages/AddReservation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddReservation() {
    const navigate = useNavigate();

    // Stan dla ka¿dego pola w formularzu
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [rooms, setRooms] = useState([]);

    // Dodawanie nowego pokoju do tablicy
    const [newRoom, setNewRoom] = useState('');

    const handleAddRoom = () => {
        if (newRoom.trim() !== '') {
            setRooms((prevRooms) => [...prevRooms, newRoom.trim()]);
            setNewRoom('');
        }
    };

    // Usuwanie pokoju po indeksie
    const handleRemoveRoom = (index) => {
        setRooms((prevRooms) => prevRooms.filter((_, i) => i !== index));
    };

    // Obsluga wyslania formularza
    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Dane nowej rezerwacji:
    Imie: ${firstName}
    Nazwisko: ${lastName}
    Email: ${email}
    Telefon: ${phoneNumber}
    Dowod: ${idNumber}
    Adres: ${address}
    Metoda platnosci: ${paymentMethod}
    Data rozpoczecia: ${startDate}
    Data zakonczenia: ${endDate}
    Godzina przyjazdu: ${arrivalTime}
    Pokoje: ${rooms.join(', ')}
    `);
        navigate('/reservations');
    };

    return (
        <div className="container">
            <h2>Dodaj rezerwacje</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Imie:</label><br />
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Nazwisko:</label><br />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Numer telefonu:</label><br />
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Numer dowodu:</label><br />
                    <input
                        type="text"
                        value={idNumber}
                        onChange={(e) => setIdNumber(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Adres zamieszkania:</label><br />
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Metoda platnosci:</label><br />
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                        style={{ width: '310px', marginBottom: '10px' }}
                    >
                        <option value="">--Wybierz--</option>
                        <option value="gotowka">Gotowka</option>
                        <option value="karta">Karta platnicza</option>
                        <option value="przelew">Przelew</option>
                    </select>
                </div>

                <div>
                    <label>Data rozpoczecia:</label><br />
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Data zakonczenia:</label><br />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Planowana godzina przyjazdu:</label><br />
                    <input
                        type="time"
                        value={arrivalTime}
                        onChange={(e) => setArrivalTime(e.target.value)}
                        required
                        style={{ width: '300px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Dodaj pokoj do rezerwacji:</label><br />
                    <input
                        type="text"
                        value={newRoom}
                        onChange={(e) => setNewRoom(e.target.value)}
                        placeholder="np. 101"
                        style={{ width: '200px', marginRight: '5px' }}
                    />
                    <button type="button" className="button" onClick={handleAddRoom}>
                        Dodaj pokoj
                    </button>
                </div>

                <div style={{ marginTop: '10px' }}>
                    <label>Lista wybranych pokoi:</label>
                    <ul>
                        {rooms.map((room, index) => (
                            <li key={index}>
                                Pokoj {room}{' '}
                                <button
                                    type="button"
                                    className="button"
                                    style={{ backgroundColor: 'red' }}
                                    onClick={() => handleRemoveRoom(index)}
                                >
                                    Usun
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <button type="submit" className="button" style={{ marginTop: '15px' }}>
                    Zloz rezerwacje
                </button>
            </form>
        </div>
    );
}

export default AddReservation;
