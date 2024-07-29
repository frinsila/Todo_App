import { useState } from "react"

const DarkMood = () => {
const [color , setColor] = useState("black")
 function darkhandle(){
     setColor("black")
 }
 function whitehandle(){
  setColor("white")
 }

return(
  <div style={{background:color}}>
    <button onClick={darkhandle}>DarkMood</button>
    <button onClick={whitehandle}>Whitemood</button>
  </div>
)
}

export default DarkMood