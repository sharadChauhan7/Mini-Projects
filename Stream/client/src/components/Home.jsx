import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function Home() {

  return (
    <>
       <div className="box">
        <h1>Home</h1>
          <Link to="/reels">Reels</Link>
       </div>
    </>
  )
}

export default Home
