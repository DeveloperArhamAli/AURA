import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {

  return (
    <div className='bg-linear-to-r from-black via-yellow-800 to-yellow-500 text-white'>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </div>
  )
}

export default App