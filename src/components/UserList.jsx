import React from 'react'
import UserCard from './UserCard'
import { users } from '../context'


const UsersList = ({ list }) => {

	const { deleteUser } = useContext(users.usersDispatcherContext)


	return (
		<div className="p-3 mt-1">
			<em>Component: UserList.jsx</em>
			<div className="mt-5 mb-3">
				<span> component: UserList.jsx</span>
				<span> aka lista de componentes</span>
			</div>

			{
				list && list.map((id, username, name) => (
					<UserCard
						key={id}
						username={username}
						name={name}
						id={id}
						deleteUser={deleteUser}
					/>
				))
			}
		</div>
	)
}

export default UsersList