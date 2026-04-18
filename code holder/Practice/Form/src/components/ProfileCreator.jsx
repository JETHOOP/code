import React, { useState } from 'react'

const ProfileCreator = () => {
    const [ user, setUser ] = useState({
        name: "",
        city: "",
        profession: ""
    })
    const [ submitted, setSubmitted ] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = () => {
        if (user.name && user.city && user.profession) {
            setSubmitted(true)
        } else {
            alert('PLease write valid')
        }
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Profile Creator</h1>
            {!submitted ? (
                <>
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        onChange={handleChange}
                        value={user.name}
                    />

                    <input
                        type="text"
                        name='city'
                        placeholder='Enter your city'
                        onChange={handleChange}
                        value={user.city}
                    />

                    <input
                        type="text"
                        name='profession'
                        placeholder='Enter you profession'
                        onChange={handleChange}
                        value={user.profession}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </>
            ) : (
                <>
                    <p>name:{user.name}</p>
                    <p>city:{user.city}</p>
                    <p>profession:{user.profession}</p></>
            )}
        </div>
    )
}

export default ProfileCreator
