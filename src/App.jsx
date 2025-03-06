import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-linear-to-r from-black via-yellow-800 to-yellow-500 text-white'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App