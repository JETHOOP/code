import React, { useEffect, useState } from 'react'

const PostCard = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
            
    }, [])
    return (
        <div>
            {users.length === 0 ? (
                <h1>Loading....</h1>
            ) : (
                users.map((user, index) => (
                    <>
                        <p>name :{user.name}</p>
                        <p>mail :{user.email}</p>
                        <p>city: {user.address.city}</p>
                    </>
                ))
            )}
        </div>
    )
}

export default PostCard
