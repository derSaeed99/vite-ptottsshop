import React, { useEffect } from 'react'
import { ButtonOverrides } from '../../Components/Button'
import { Button } from '@mui/material'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Main } from '../Main'
import { Products } from '../Products/Products'
import { Landing } from '../Landing/Landing'

export const AppRoutes = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/home")
    }, [])
    return (
        <>
            <Routes>
                <Route path="/home" element={<Landing />} />
                <Route path="/products" element={<Products />} />
            </Routes></>
    )
}
