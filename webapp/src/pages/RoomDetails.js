// src/pages/RoomDetails.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function RoomDetails() {
    const { roomNumber } = useParams();
    const navigate = useNavigate();

    // Tymczasowe dane
    const [roomData, setRoomData] = useState({
        roomNumber: roomNumber,
        capacity: 2,
        isOccupied: false,
    });

    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setRoomData((prev) => ({ ...prev, isOccupied: e.target.checked }));
    };

    const handleSave = () => {
        alert(`Zapisano zmiany pokoju nr ${roomData.roomNumber}`);
        setEditMode(false);
    };

    const handleCancel = () => {
        navigate('/rooms');
    };

    return (
        <div className="container">
            <h2>Szczegoly pokoju {roomNumber}</h2>

            <div style={{ marginBottom: '20px' }}>
                <label>Pojemnosc: </label><br />
                {editMode ? (
                    <input
                        type="number"
                        name="capacity"
                        value={roomData.capacity}
                        onChange={handleChange}
                        style={{ width: '50px' }}
                    />
                ) : (
                    <p>{roomData.capacity}</p>
                )}
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Czy zajety?: </label><br />
                {editMode ? (
                    <input
                        type="checkbox"
                        checked={roomData.isOccupied}
                        onChange={handleCheckboxChange}
                    />
                ) : (
                    <p>{roomData.isOccupied ? 'Tak' : 'Nie'}</p>
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

export default RoomDetails;
