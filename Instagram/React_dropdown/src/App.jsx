import { useState } from 'react'
import Show from './show'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Show/>
    </>
  )
}

export default App
