import './App.css'
import { Outlet } from 'react-router'
import NavBar from './components/navBar/NavBar'

function App() {
  

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
