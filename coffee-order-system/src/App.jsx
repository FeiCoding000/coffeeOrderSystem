import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Menu } from './pages/menu'
import { Login } from './pages/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
      <Login />

    </>
    
  )
}

export default App
