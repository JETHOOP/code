import React from 'react'
import Navbar from './components/Navbar'
import Mainroute from './routes/Mainroute'
const App = () => {
  return (
    <div className='py-10 px-[10%] w-screen h-screen text-white font-thin bg-gray-800'>
      
    <Navbar />
    <Mainroute/>
    </div>
  )
}

export default App
