import React from 'react'
import { useForm } from "react-hook-form";

const UserForm = ({ createUser, initialValues }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        values: initialValues
    });


    const handleReset = () => {

        return {
            username: "",
            name: "",
            age: "",
        }

    }

    const sendForm = (data) => {

        createUser(data)
        reset(handleReset)

        console.log(data)
    }


    return (
        <>

            {console.log(initialValues)}
            <form onSubmit={handleSubmit(sendForm)}>
                <p>UserForm</p>
                <input disabled type="number" className='mb-2 form-control' placeholder='id'{...register('id')} />
                {errors.id && <p>Error: it is necessary this field 'id'</p>}
                <input type="text" className='mb-2 form-control' placeholder='username'{...register('username', { required: true })} />
                {errors.username && <p>Error: it is necessary this field 'username'</p>}
                <input type="text" className='mb-2 form-control' placeholder='name'{...register('name', { required: true })} />
                {errors.name && <p>Error: it is necessary this field 'name'</p>}
                <input type="number" className='mb-2 form-control' placeholder='age'{...register('age', { required: true })} />
                {errors.age && <p>Error: it is necessary this field 'age'</p>}
                <button type='submit' className="btn btn-success">
                    Submit
                </button>
            </form>
        </>
    )
}

export default UserForm