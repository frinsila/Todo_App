// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import './Usage.css'
const Usage = () => {
    const [val , setVal] =useState(0)
    const[color,setcolor]=useState("white")
    const han =()=>{
          setVal(val+1)
    }
    function decress(){
        setVal(val-1)
    }
    function resett(){
        setVal(0)
    }
    function greenclr(){
        setcolor("green")
    }
    function blckclr(){
        setcolor("black")
    }
  return (
    <div className="usage" style={{background:color}}>
     <h1>{val}</h1>
     <button onClick={han}>Ingrement</button>
     <button onClick={decress}>Decrement</button>
     <button onClick={resett}>reset</button>
     <button onClick={greenclr}>green</button>
     <button onClick={blckclr}>black</button>
    </div>  
  )
}

export default Usage