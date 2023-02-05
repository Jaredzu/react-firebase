import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import UserForm from '../components/UserForm'
import { users } from "../context";


const CreateUser = () => {
    const { id } = useParams()
    const { createUser, getUserDetails } = useContext(users.usersDispatcherContext)

    const { currentUser } = useContext(users.usersContext)

    useEffect(() => {
        if (id) {
            getUserDetails(id)
        }
    }, [id])

    return (
        <>
            <h4><em>container: CreateUser.jsx</em></h4>
            <div className="container">
                <div className="row">
                    <div className="col-2 col-md-3">

                    </div>
                    <div className="col-8 col-md-6">
                        <UserForm createUser={createUser} initialValues={currentUser} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateUser