import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const GoogleLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                const userInfo = {
                    userName: user.displayName,
                    userEmail: user?.email,
                    userPhoto: user?.photoURL,
                    role: 'Buyer'

                }
                handleSaveUserOnDatabase(userInfo)
                navigate('/')
            })
    }


    const handleSaveUserOnDatabase = (user) => {
        fetch('https://boi-bazar-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                const email = user.userEmail

                handleSetJwt(email)

            })
            .catch(err => console.error(err))
    }


    const handleSetJwt = (email) => {

        fetch(`https://boi-bazar-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.data)
                if (data.status) {
                    localStorage.setItem('token', data.data)

                }

            })
            .catch(error => console.log(error))
    }





    return (
        <div className='flex w-100 justify-center'>
            <button onClick={handleGoogleSignIn} className='btn btn-primary'>Google Login</button>
        </div>
    );
};

export default GoogleLogin;