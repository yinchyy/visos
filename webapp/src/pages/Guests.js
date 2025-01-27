// src/pages/Guests.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Guests() {
    const navigate = useNavigate();

    const guestsData = [
        { id: 1, firstName: 'Jan', lastName: 'Kowalski', email: 'jan.kowalski@example.com' },
        { id: 2, firstName: 'Anna', lastName: 'Nowak', email: 'anna.nowak@example.com' },
        { id: 3, firstName: 'Piotr', lastName: 'Wisniewski', email: 'piotr.w@example.com' },
    ];

    return (
        <div className="container">
            <h2>Lista Gosci</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Email</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {guestsData.map((guest) => (
                        <tr key={guest.id}>
                            <td>{guest.id}</td>
                            <td>{guest.firstName}</td>
                            <td>{guest.lastName}</td>
                            <td>{guest.email}</td>
                            <td>
                                <button
                                    className="button"
                                    onClick={() => navigate(`/guests/${guest.id}`)}
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

export default Guests;
