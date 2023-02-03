import React, { useContext } from 'react'
import UserForm from '../components/UserForm'
import { users } from "../context";


const CreateUser = () => {

    const { createUser } = useContext(users.usersDispatcherContext)


    return (
        <>
            <h4><em>container: CreateUser.jsx</em></h4>
            <UserForm createUser={createUser} />
        </>
    )
}

export default CreateUser