import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    async function submitHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                password
            },{
                withCredentials:true
            })
            console.log('Response:', response)
        } catch (error) {
            console.error('Error:', error)
        }
        console.log('Username:', username, 'Password:', password)
    }

    return (
        <div>
            <form onSubmit={submitHandler} action="">
                <h1>Login</h1>
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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login