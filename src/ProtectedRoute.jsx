// ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from "./context/userContext";

const ProtectedRoute = ({ children }) => {
    const { userData } = useContext(UserContext);
    const token = localStorage.getItem('jwt-token');

    if (!token || !userData.username) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
