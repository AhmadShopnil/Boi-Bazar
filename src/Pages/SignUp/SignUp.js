import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [error, setError] = useState(null)
    const { createUser, updateUser } = useContext(AuthContext)


    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value
        const userEmail = form.email.value
        const userPhoto = form.photo.value
        const password = form.password.value
        const role = form.role.value

        const userInfo = {
            userName,
            userEmail,
            userPhoto,
            role

        }

        createUser(userEmail, password)
            .then(result => {

                handleUpdateProfile(userName)
                // alert('Sign Up Success')
                toast.success('Sign Up Success')
                navigate('/')

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })


        const handleUpdateProfile = (userName) => {
            const profile = {
                displayName: userName
            }
            updateUser(profile)
                .then(data => {
                    handleSaveUserOnDatabase(userInfo)
                })
                .catch(error => console.error(error))
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
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-10">
                    <h1 className="text-5xl font-bold mx-auto">Sign Up</h1>
                    {
                        error && <p className='text-red-500 my-2'>{error}</p>
                    }
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo" className="input input-bordered" required />
                        </div>
                        <label className="label">
                            <span className="label-text">Sellect Your Role</span>
                        </label>
                        <select name='role' className="select select-info w-full max-w-xs">
                            <option selected>Buyer</option>
                            <option>Seller</option>

                        </select>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have account?<Link to='/login' className='text-blue-500'> Login</Link></p>
                            </label>
                        </div>
                        <input className='btn btn-primary mt-4 w-full ' value='Sign Up' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;