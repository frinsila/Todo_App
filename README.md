# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
import React,{useState,useEffect} from 'react'

function Fetchapi() {
    const[quotes,setquot]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then(data=>setquot(data.quotes.splice(0,10)));
        
    },[])
    
  return  <div className=''>

    <h1 style={{display:"flex",justifyContent:"center",background:"blue",color:"black"}}>Fetch api</h1>
    {quotes.map(qt=>(
        <div key={qt.id}>
     <h1 style={{display:"flex",justifyContent:"center",background:"pink",color:"black" }}>{qt.quote}</h1>
     </div>
    ))}
  
  </div>
}


//propes

  const states=[
    {name:"kerala",language:"malayalam"},
    {name:"delhi",language:"hindi"},
    {name:"thamilnad",language:"thamizh"},
  ]
<States states={states}/>

const States = ({states}) => {
  
  return (
    <div>
    {states.map((e,index) =>(
        <div key={index}>
        <h1 className='heading' style={{background:"green",display:"flex",justifyContent:"center"}}>{e.name}</h1>
        <h4 style={{background:"yellow",display:'flex',justifyContent:"center"}}>{e.language}</h4>
        </div>
  ))}
    </div>
  )
}
export default States

//usestate

function chanchColor(){
    setColor('white')
}

function darkcolor(){
    setColor('black')
}


  return (
    <div style={{background :color,height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button onClick={darkcolor} >DarkMood</button>
        <button onClick={chanchColor}>LightMood</button>
    </div>
  )

export default Fetchapi