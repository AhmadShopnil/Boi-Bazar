import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Dashbord = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2 className='text-2xl text-center'>Welcome Mr. {user?.displayName} </h2>
        </div>
    );
};

export default Dashbord;