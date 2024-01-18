import { useState } from "react";
import { indiaData } from "./data";
import './dropdown.css'
export default function Dropdown(){
    // Country state
    let [ctryState,setctryState]=useState("State");
    console.log(ctryState);
    // Handling State
    function handleState(e){
        setctryState(e.target.value);
    }
    return(
        <div>
            {/* States */}
            <select name="state" id="state" className="box" onChange={handleState} >
                {
                Object.keys(indiaData).map((value,index)=>{
                    return <option value={`${value}`} key={index}>{value}</option>
                })
                }
            </select>



            {/* City */}
            <select name="city" id="city" className="box">

                {
                    (indiaData[ctryState]).map((city,index)=>{
                        return <option value={`${city}`} key={index} >{city}</option>
                    })
                }
            </select>
        </div>
    );
}