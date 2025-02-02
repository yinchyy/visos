import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getSession } from '../api/auth';

function ProtectedRoute({ children }) {
    // const isAuthenticated = localStorage.getItem('token');
    var isAuthenticated
    useEffect(()=>{
    async function checkAuth(){
    isAuthenticated = await getSession().code === 200;
    }
    checkAuth()
    },[])

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
