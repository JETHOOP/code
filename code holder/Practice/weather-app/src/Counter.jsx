import React, { useContext, useState } from 'react'
import { Context } from './Context'

const Counter = () => {
    const [count , setCount] = useState(0)
    const name = useContext(Context)
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count + 1)}>increase</button>
      <button onClick={()=>setCount(count - 1)}>decrease</button>
        {name}
    </div>
  )
}

export default Counter
