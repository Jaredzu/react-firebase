
import React from "react"
import { Home, Users } from "./pages"
import Navbar from "./layout/Navbar"
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navbar />}>

                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />

            </Route>
        </>
    )
)
