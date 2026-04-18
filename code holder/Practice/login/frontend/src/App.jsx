import React, { useEffect, useState } from 'react'
import Login from '../src/components/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
