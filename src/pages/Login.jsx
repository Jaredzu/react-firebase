import React, { useContext } from 'react'
import { firebase } from '../api'
import { auth } from '../context'


const Login = () => {

    const {user} = useContext(auth.authContext)

    const handleClick = async () => {
        firebase.login()
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
                        <button className="btn btn-danger m-3" onClick={handleLogout}>Logout</button>
                    </>
                ) : (

                    <button className="btn btn-primary" onClick={handleClick}>Login</button>

                )
            }
        </>
    )
}

export default Login