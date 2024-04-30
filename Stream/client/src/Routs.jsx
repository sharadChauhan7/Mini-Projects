import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./components/Home";
import Reel from "./components/Reels";
import FindReel from "./components/FindReel";

const Routs = () => {
    let [videosList, setVideosList] = React.useState(null);
    
    let [videoIdx, setVideoIdx] = React.useState(0);
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reels" element={<FindReel setVideosList={setVideosList} videosList={videosList} />} />
            <Route path="/reels/:id" element={<Reel videoIdx={videoIdx} setVideoIdx={setVideoIdx} videosList={videosList}/>} />
        </Routes>
        </Router>
    );
    }

export default Routs;
