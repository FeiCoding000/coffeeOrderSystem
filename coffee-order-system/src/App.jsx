import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Menu } from './pages/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hello world!
      <Menu></Menu>
    </>
  )
}

export default App
