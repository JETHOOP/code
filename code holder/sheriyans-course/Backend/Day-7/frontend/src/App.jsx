import { useState } from 'react'
import FacialExpression from './components/FacialExpresion'
import './App.css'
import './index.css'
import './components/facialExpression.css'
import MoodSongs from './components/MoodSongs'

function App() {

  const [Songs, setSongs] = useState([
    
    ])
  return (
    <>
      <FacialExpression setSongs = {setSongs} />
      <MoodSongs Songs ={Songs} />
    </>
  )
}

export default App
