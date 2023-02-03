import React from 'react'
import { GetUsers } from "../containers";
import CreateUser from '../containers/CreateUser';
const Users = () => {
	return (
		<>
			<h3><em>page: Users.jsx</em></h3>
			<GetUsers />
			<CreateUser />
		</>
	)
}

export default Users

//rafce