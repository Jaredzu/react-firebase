import React from 'react'
import { useForm } from "react-hook-form";

const UserForm = ({ createUser }) => {

    const { register, handleSubmit, resetField, formState: { errors } } = useForm();

    const sendForm = (data) => {

        createUser(data)

        console.log(data)

        resetField('id')
        resetField('username')
        resetField('name')
        resetField('age')
    }

    return (
        <form onSubmit={handleSubmit(sendForm)}>
            <p>UserForm</p>
            <input type="number" placeholder='id'{...register('id', { required: true })} />
            {errors.id && <p>Error: it is necessary this field 'id'</p>}
            <input type="text" placeholder='username'{...register('username', { required: true })} />
            {errors.username && <p>Error: it is necessary this field 'username'</p>}
            <input type="text" placeholder='name'{...register('name', { required: true })} />
            {errors.name && <p>Error: it is necessary this field 'name'</p>}
            <input type="number" placeholder='age'{...register('age', { required: true })} />
            {errors.age && <p>Error: it is necessary this field 'age'</p>}
            <button type='submit' className="btn btn-success">
                Submit
            </button>
        </form>
    )
}

export default UserForm