import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                username,
                password
            }, {
                withCredentials: true
            })

        } catch (error) {
            console.error('Error:', error)

        }
        navigate('/login')
    }


    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <h1>Register</h1>
                <label htmlFor="">username</label>
                <input
                    type="text"
                    placeholder='Enter your username'
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <p></p>
                <label htmlFor="">password</label>
                <input
                    type="password"
                    placeholder='*******************'
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p></p>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Register