import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from './counter'
import Todo from './Todo'
import Nav from './Nav'
import News from './News'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes >
        <Route path='/counter' element={<Counter />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </div >
  )
}

export default App
