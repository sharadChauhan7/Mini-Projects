import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';
function Home({VideosList,setVideosList,setVideo}) {

 const navigate = useNavigate();
  React.useEffect(()=>{
    
    async function fetchData(){
      const response = await fetch('http://localhost:3000/video')
      const data = await response.json();
      setVideosList(data);
        navigate(`/reels/${data[0]}`);
    }
    console.log(VideosList);
    if(!VideosList){
        fetchData();
    }
    else{
        navigate(`/reels/${VideosList[0]}`);
    }
  },[]);
  return (
    <>
       <div className="box">
        {/* Skeleton for reels */}

        <div className="skeleton">
            <div className="skeleton-img">Skeleton </div>
            <div className="skeleton-text"> alksDHLKHJADS</div>
            <div className="skeleton-text">ASDF</div>
        </div>
        
       </div>
    </>
  )
}

export default Home
