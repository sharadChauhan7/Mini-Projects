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
       <div className="flex flex-col justify-center items-center text-4xl mt-14">
        {videosList?<video autoPlay muted controls src={`http://localhost:3000/video/${id}`} className='w-[20vw] h-[70vh] rounded-3xl border-4 bg-gray-800'></video>:<h1>Loading...</h1>}
        {/* Button to move on next video  */}
        <button onClick={next} className='bg-blue-500 text-white p-2 rounded-md mt-4'>Next</button>

       </div>
    </>
  )
}

export default Home
