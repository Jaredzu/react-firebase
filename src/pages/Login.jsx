import React, { useState } from 'react'
import { firebase } from '../api'

const Login = () => {

    const [user, setUser] = useState()

    const handleClick = async () => {
        const _user = await firebase.login()
        console.log(_user);
        setUser(_user)
    }

    const handleLogout = () => {
        firebase.logout()
    }

    return (
        <>
            <div>Login</div>
            {
                user ? (
                    <>
                        <img src={user.photoURL} alt="user photo" />
                        <h1>Welcome! { user.displayName}</h1>
                        <button className="btn btn-danger m-3" onClick={handleLogout}>LogOut</button>
                    </>
                ) : (

                    <button className="btn btn-primary" onClick={handleClick}>Login</button>

                )
            }
        </>
    )
}

export default Login