import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='py-10 px-[10%] text-white font-thin bg-gray-700 w-screen h-screen'>
      <Navbar />
      <Mainroutes/>
    </div>
  )
}

export default App
