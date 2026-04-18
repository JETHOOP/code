import { useState } from 'react'
import LoginPage from "../src/components/LoginPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './components/RegisterPage'
function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users")
      const data = await response.json();
      setUsers(data.data)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

//       <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
  
//   <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
    
//     <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
//       Users List
//     </h1>

//     <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
      
//       <thead className="bg-sky-800 text-white">
//         <tr>
//           <th className="py-3 px-4 text-left">Name</th>
//           <th className="py-3 px-4 text-left">Email</th>
//           <th className="py-3 px-4 text-left">Age</th>
//         </tr>
//       </thead>

//       <tbody>
//         {users.map((user, index) => (
//           <tr 
//             key={index} 
//             className="border-b hover:bg-gray-100 transition"
//           >
//             <td className="py-2 px-4">{user.name}</td>
//             <td className="py-2 px-4">{user.email}</td>
//             <td className="py-2 px-4">{user.age}</td>
//           </tr>
//         ))}
//       </tbody>

//     </table>

//     <button
//       onClick={getUsers}
//       className="mt-6 w-full bg-sky-800 hover:bg-sky-900 text-white py-3 rounded-xl font-semibold transition duration-300"
//     >
//       Get Users
//     </button>

//   </div>
// </div>
export default App
