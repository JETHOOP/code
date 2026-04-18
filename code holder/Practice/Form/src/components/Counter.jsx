import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Click here to increase count</h1>
            <h1>you liked {count}❤️times</h1>
            <button onClick={() => setCount(count + 1)}>Like</button>
            <button onClick={() => setCount(count - 1)}>Dislike</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
        </div>
    )
}

export default Counter
