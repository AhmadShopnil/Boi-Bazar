import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ForbiddenAccess = () => {
    const { logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()

        localStorage.removeItem('token')

    }

    return (
        <div className='min-h-screen w-100'>
            <div className='w-96 m-auto'>
                <h2 className='text-3xl '>You are trying to access Admin or Buyer route</h2>
                <p>Go back <Link className='font-semibold text-blue-400' to='/'>Home</Link></p>
                <p>If you are Admin or Buyer please <button className="btn btn-outline btn-primary btn-xs" onClick={handleLogOut}><Link to='/login'>login</Link></button> with Admin or Buyer account</p>
            </div>
        </div>
    );
};

export default ForbiddenAccess;