import React from 'react'

const FriendCard = (props) => {
    const { name, city, hobby } = props
    return (
        <div>
            <h2>Your name is {name}</h2>
            <h2>You live in {city}</h2>
            <h1>YOur hobby is {hobby}</h1>
        </div>
    )
}

export default FriendCard
