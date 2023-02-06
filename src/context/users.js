import React, { createContext, useState } from 'react'
import { users as usersApi, firebase } from "../api/";

export const usersContext = createContext()

export const usersDispatcherContext = createContext()

export const UsersProvider = ({ children }) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const [currentUser, setCurrentUser] = useState({
		username: "init @username",
		name: "init name",
		age: "init age",
	})

	const getData = async () => {
		try {
			setData(null)
			setIsLoading(true)
			const res = await firebase.getData()
			setIsLoading(false)
			setData(res.data)
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}

	const createUser = async (user) => {
		console.log("sendUser");
		try {
			setIsLoading(true)

			if (user.id) {
				await firebase.updateUser(user.id, user)
			} else {
				await firebase.createUser(user)
			}

			setIsLoading(false)
			await getData()
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}


	const getUserDetails = async (id) => {
		console.log("getUserDetails")
		try {
			setIsLoading(true)
			const res = await firebase.getUserDetails(id)
			setCurrentUser(res.data);
			console.log(res.data);
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}

	const deleteUser = async (userId) => {
		console.log("deleteUser")
		try {
			setIsLoading(true)
			await firebase.deleteUser(userId)
			setIsLoading(false)
			await getData()
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}


	// const state = {
	// 	data: data,
	// 	error: error,
	// 	isLoading: isLoading
	// };

	const state = { data, error, isLoading, currentUser };

	const dispatchers = { getData, deleteUser, createUser, getUserDetails }

	return (
		<>
			<usersDispatcherContext.Provider value={dispatchers}>
				<usersContext.Provider value={state}>
					{children}
				</usersContext.Provider>
			</usersDispatcherContext.Provider>
		</>
	)
}