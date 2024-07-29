// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

export default function Hookcounter() {
    const initialcount=0
    const[count,setcount]=useState(initialcount)
    function incrementfive(){
        for (let i=0;i<5;i++){
            setcount(prevcount=>prevcount+1)
        }
    }
  return (
    <div>
        Count:{count}
        <button onClick={()=>setcount(initialcount)}>reset</button>
        <button onClick={()=>setcount(prevcount=>prevcount+1)}>increment</button>
        <button onClick={()=>setcount(prevcount=>prevcount+1)}>decrement</button>
        <button onClick={incrementfive}>increment 5</button>



    </div>
  )
}
