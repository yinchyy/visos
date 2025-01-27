// src/pages/Rooms.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Rooms() {
    const navigate = useNavigate();

    const roomsData = [
        { roomNumber: 101, capacity: 2, isOccupied: false },
        { roomNumber: 102, capacity: 3, isOccupied: true },
        { roomNumber: 201, capacity: 2, isOccupied: false },
        { roomNumber: 202, capacity: 4, isOccupied: false },
    ];

    return (
        <div className="container">
            <h2>Lista Pokoi</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Numer Pokoju</th>
                        <th>Pojemnosc</th>
                        <th>Czy zajety?</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {roomsData.map((room) => (
                        <tr key={room.roomNumber}>
                            <td>{room.roomNumber}</td>
                            <td>{room.capacity}</td>
                            <td>{room.isOccupied ? 'Tak' : 'Nie'}</td>
                            <td>
                                <button
                                    className="button"
                                    onClick={() => navigate(`/rooms/${room.roomNumber}`)}
                                >
                                    Szczegoly
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Rooms;
