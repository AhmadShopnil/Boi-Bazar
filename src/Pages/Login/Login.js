import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';


const Login = () => {
    const { logIn } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'




    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                setError(null)
                handleSetJwt(email)
                // setUserEmail(email)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
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
        <div>
            <div className="hero mb-10 ">
                <div className="hero-content  gap-20 lg:flex-row">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-12 bg-base-100">
                        <h1 className="text-5xl font-bold text-center pt-5">Login now</h1>
                        {
                            error && <p className='text-red-600 my-3'>{error}</p>
                        }
                        <form onSubmit={handleSignIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-accent" type="submit" value="Login" />

                            </div>
                        </form>

                        <p className='text-center py-4'>Don't have any account ? <Link className='text-blue-400 font-bold' to="/signup">Register</Link></p>

                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;