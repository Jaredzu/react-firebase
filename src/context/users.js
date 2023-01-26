import React, { createContext, useState } from 'react'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {

    return (
        <>
            {children}
        </>
    )

}
