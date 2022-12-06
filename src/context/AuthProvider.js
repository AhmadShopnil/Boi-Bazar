import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    // create user by email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log Out
    const logOut = () => {
        signOut(auth)
            .then(result => {

            })
            .catch(error => console.error(error))
    }

    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // Get login user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unsubscribe()
        }


    }, [])


    // update User Data
    const updateUser = (profile) => {

        return updateProfile(auth.currentUser, profile)


    }


    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        updateUser,
        signInWithGoogle

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;