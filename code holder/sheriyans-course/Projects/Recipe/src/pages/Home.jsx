import axios from '../utils/Axios'
import React, { useEffect } from 'react'


const Home = () => {
  const getproduct = async () => {
    try {
      const { data } = await axios.get('/products')
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getproduct()
    },[]  )
  return (
    <div>
      <h1>Product</h1>
      <button onClick={getproduct}>Get Product</button>
    </div>
  )
}

export default Home
