import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Home({videoIdx,setVideoIdx,videosList}) {

    let { id } = useParams();
    const navigate = useNavigate();
    function next(){
        setVideoIdx((videoIdx+1)%(videosList.length));
        navigate(`/reels/${videosList[(videoIdx+1)%(videosList.length)]}`);
    }
    console.log(videosList[videoIdx]);
  return (

    <>
       <div className="box">
        {videosList?<video autoPlay controls src={`http://localhost:3000/video/${id}`} className='box'></video>:<h1>Loading...</h1>}
        <button onClick={next}>Next</button>
       </div>
    </>
  )
}

export default Home
