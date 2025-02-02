import React, {useEffect, useState} from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Reservations from './pages/Reservations';
import Rooms from './pages/Rooms';
import Guests from './pages/Guests';
import Management from './pages/Management';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AddReservation from './pages/AddReservation';
import ReservationDetails from './pages/ReservationDetails';
import RoomDetails from './pages/RoomDetails';
import GuestDetails from './pages/GuestDetails';
import { getSession, logout } from './api/auth';
import Employees from './pages/Employees';



function App() {
    return (

    <>
      <Routes>
        {/* Ekran logowania */}
        <Route path="/login" element={<Login />} />

        {/* Po zalogowaniu wyswietlamy Navbar i podstrony */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                      <Navbar />
                      <Outlet />
              </>
            </ProtectedRoute>
          }
        >
          {/* Po wejsciu na "/" przekierowujemy na "/reservations" */}
          <Route index element={<Navigate to="reservations" replace />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="guests" element={<Guests />} />
          <Route path="employees" element={<Employees />} />
          <Route path="management" element={<Management />} />
                  <Route path="reservations/add" element={<AddReservation />} />
                  <Route path="reservations/:id" element={<ReservationDetails />} />
                  <Route path="rooms/:roomNumber" element={<RoomDetails />} />
                  <Route path="guests/:id" element={<GuestDetails />} />
        </Route>

        {/* Jesli ktos wpisze niepoprawny adres, przekieruj na "/reservations" */}
        <Route path="*" element={<Navigate to="/reservations" replace />} />
      </Routes>
    </>
  );
}

export default App;
