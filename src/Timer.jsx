import React,{useEffect, useState} from "react";
const Timer=()=>{
    const [time,setTime]=useState(0);
    useEffect(()=>{
        //mounted
        const timer=setTimeout(()=>setTime(time+1),1000);  
    },[time])
    return (
        <div>
            <h1>Stop watch</h1>
            <p>Current Time is {time}</p>

        </div>
    )
}
export default Timer;
