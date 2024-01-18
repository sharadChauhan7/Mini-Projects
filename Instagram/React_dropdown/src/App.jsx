import { useState } from 'react'
import Dropdown from './dropdown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dropdown/>
    </>
  )
}

export default App
