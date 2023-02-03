import React, { useContext, useEffect } from 'react'
import { users } from "../context";
import { UserList } from "../components";

const GetUsers = () => {

	const { getData } = useContext(users.usersDispatcherContext)

	const { data, error, isLoading } = useContext(users.usersContext)

	useEffect(() => {
		if (!data) {
			getData()
		}
	}, [data])


	return (
		<>
			<div>GetUsers</div>
			<h4><em>container: GetUser.jsx</em></h4>

			<UserList list={data} />


			<p> error: {error}</p>
			<p> isLoading: {String(isLoading)}</p>
		</>
	)
}

export default GetUsers