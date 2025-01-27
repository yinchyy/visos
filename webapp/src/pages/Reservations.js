import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reservations() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

  // Przykladowe dane rezerwacji
    const [reservations, setReservations] = useState([
        {
            id: 1,
            clientName: 'Jan Kowalski',
            roomNumbers: [101, 102],
            status: 'Oczekujaca',
            scheduledDate: '2025-02-10'
        },
        {
            id: 2,
            clientName: 'Anna Nowak',
            roomNumbers: [201],
            status: 'Potwierdzona',
            scheduledDate: '2025-03-01'
        },
        {
            id: 3,
            clientName: 'Adam Nowicki',
            roomNumbers: [105],
            status: 'Anulowana',
            scheduledDate: '2025-02-15'
        }
    ]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredReservations = reservations.filter((r) =>
        r.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddReservation = () => {
        navigate('/reservations/add');
    };
    const handleChangeStatus = (id, newStatus) => {
        setReservations((prev) =>
            prev.map((res) => (res.id === id ? { ...res, status: newStatus } : res))
        );
    };




  return (
      <div className="container">
          <h2>Lista Rezerwacji</h2>
          <div>
              <input
                  type="text"
                  placeholder="Wyszukaj po kliencie..."
                  className="search-input"
                  value={searchTerm}
                  onChange={handleSearchChange}
              />
              <button className="button" onClick={handleAddReservation}>
                  Dodaj rezerwacje
              </button>
          </div>
          <table className="table">
              <thead>
                  <tr>
                      <th>Numer rezerwacji</th>
                      <th>Klient</th>
                      <th>Numery pokoi</th>
                      <th>Status</th>
                      <th>Planowany czas</th>
                      <th>Akcje</th>
                  </tr>
              </thead>
              <tbody>
                  {filteredReservations.map((res) => (
                      <tr key={res.id}>
                          <td>{res.id}</td>
                          <td>{res.clientName}</td>
                          <td>{res.roomNumbers.join(', ')}</td>
                          <td>{res.status}</td>
                          <td>{res.scheduledDate}</td>
                          <td>
                              {/* Przycisk Szczegoly -> przenosi do /reservations/:id */}
                              <button
                                  className="button"
                                  onClick={() => navigate(`/reservations/${res.id}`)}
                                  style={{ marginRight: '5px' }}
                              >
                                  Szczegoly
                              </button>

                              {/* Przycisk Zmien status -> proste menu rozwijane */}
                              <select
                                  onChange={(e) => handleChangeStatus(res.id, e.target.value)}
                                  value="" // bo zawsze ma sie pokazac placeholder
                                  style={{ padding: '5px', border: '1px solid #ccc' }}
                              >
                                  <option value="" disabled hidden>
                                      Zmien status
                                  </option>
                                  <option value="Oczekujaca">Oczekujaca</option>
                                  <option value="Potwierdzona">Potwierdzona</option>
                                  <option value="Anulowana">Anulowana</option>
                              </select>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

export default Reservations;
