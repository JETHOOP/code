import React, { createContext, useState } from 'react'


export const Context = createContext()
const ContextProvider = (props) => {
    const [name , setName] = useState('mohit')
    return (
        <Context.Provider value={name}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
