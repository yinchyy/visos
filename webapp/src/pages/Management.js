import React, { useState } from 'react';

function Management() {
  const [newEmployeeLogin, setNewEmployeeLogin] = useState('');
    const [newEmployeeRole, setNewEmployeeRole] = useState('');
    const [newEmployeeName, setNewEmployeeName] = useState('');
    const [newEmployeeSurname, setNewEmployeeSurname] = useState('');
    const [newEmployeePassword, setNewEmployeePassword] = useState('');
    const [newEmployeePesel, setNewEmployeePesel] = useState('');
    const [newEmployeeEmail, setNewEmployeeEmail] = useState('');
    const [newEmployeePhone, setNewEmployeePhone] = useState('');
    const [newEmployeeSex, setNewEmployeeSex] = useState('');
    

  const handleAddEmployee = () => {

      alert(`Dodano pracownika: ${newEmployeeName}, rola: ${newEmployeeRole}`);
      setNewEmployeeLogin('');
      setNewEmployeeSurname('');
      setNewEmployeePassword('');
      setNewEmployeePesel('');
      setNewEmployeeEmail('');
      setNewEmployeePhone('');
      setNewEmployeeSex('');
    setNewEmployeeName('');
    setNewEmployeeRole('');
  };

  return (
    <div className="container">
      <h2>Zarzadzanie</h2>
      <div>

              <label>Imie </label><br />
              <input
                  type="text"
                  value={newEmployeeName}
                  onChange={(e) => setNewEmployeeName(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}
              /><br />

              <label>Nazwisko </label><br />
              <input
                  type="text"
                  value={newEmployeeSurname}
                  onChange={(e) => setNewEmployeeSurname(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}
              /><br />

              <label>PESEL </label><br />
              <input
                  type="text"
                  value={newEmployeePesel}
                  onChange={(e) => setNewEmployeePesel(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}
              /><br />

              <label>Email </label><br />
              <input
                  type="text"
                  value={newEmployeeEmail}
                  onChange={(e) => setNewEmployeeEmail(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}
              /><br />

              <label>Numer telefonu </label><br />
              <input
                  type="text"
                  value={newEmployeePhone}
                  onChange={(e) => setNewEmployeePhone(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}
              /><br />

              <label>Plec </label><br />
              <select
                  type="text"
                  value={newEmployeeSex}
                  onChange={(e) => setNewEmployeeSex(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}>
                  <option value="" disabled>
                      -- Wybierz plec --
                  </option>
                  <option value="1">Mezczyzna</option>
                  <option value="2">Kobieta</option>
                  


              </select><br />

              <label>Login </label><br />
              <input
                  type="text"
                  value={newEmployeeLogin}
                  onChange={(e) => setNewEmployeeLogin(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}
              /><br />
       
              <label>Haslo </label><br />
              <input
                  type="text"
                  value={newEmployeePassword}
                  onChange={(e) => setNewEmployeePassword(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}
              /><br />
              <label>Rola </label><br />
              <select
                  type="text"
                  value={newEmployeeRole}
                  onChange={(e) => setNewEmployeeRole(e.target.value)}
                  style={{ width: '250px', marginBottom: '10px' }}>
                  <option value="" disabled>
                      -- Wybierz role --
                  </option>
                  <option value="1">Recepcja</option>
                  <option value="2">Administrator</option>
                  <option value="3">Utrzymanie czystosci powierzchni plaskich</option>



              </select><br />


        <button className="button" onClick={handleAddEmployee}>
          Dodaj pracownika
        </button>
      </div>
    </div>
  );
}

export default Management;
