import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllEmployees } from '../api/auth';

function Employees() {
    const navigate = useNavigate();

    const [guestsData,setEmployeesData] = useState([]);

    useEffect(()=>{
        async function setEmployees(){
            const employees = await getAllEmployees()
            console.log(employees)
            if(employees != null) setEmployeesData(()=>employees);
        }
        setEmployees();
    },[])
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
                    {guestsData != null && guestsData.length>0 ? guestsData.map((guest) => (
                        <tr key={guest.id}>
                            <td>{guest.id}</td>
                            <td>{guest.name}</td>
                            <td>{guest.surname}</td>
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
                    )): <tr><td rowSpan={5}>No results were found.</td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default Employees;
