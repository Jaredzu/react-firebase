import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { auth } from './context'


const PrivateRoute = () => {

    const { user } = useContext(auth.authContext)
    console.log(user, "privateRoute");

    return (
        <>
            {
                user ? (
                    <Outlet />
                ) : (
                    <>
                        {console.log("You're not logged in")}
                        <p>Hey! You need to be Logged in</p>
                        <Navigate to="/login" />
                    </>
                )
            }
        </>
    )
}

export default PrivateRoute