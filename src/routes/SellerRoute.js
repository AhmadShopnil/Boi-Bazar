import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useRole from '../hooks/useRole';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [userRole, userRoleLoading] = useRole(user?.email)

    if (loading || userRoleLoading) {
        return <progress className="progress w-56 "></progress>
    }
    if (userRole === 'Seller') {
        return children
    }

    return <Navigate to='/forbidden' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;