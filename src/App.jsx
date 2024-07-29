// eslint-disable-next-line no-unused-vars
import React from 'react'
import Usage from './Component/Usage'
import Click from './Click'
import Fetch from './Fetch'
import Focus from './Focus'
import Hookcounter from './Component/Hookcounter'
import Todoapp from './Todoapp'


const App = () => {
  const CheckNum=({number})=>{
    if(number>0)
    {
      return <h1>positive num</h1>
    }
    else if(number<0){
      return<h1>negative num</h1>

    }
    else{
      return<h1>zero</h1>
    }

  }
  return (
    <div>
      {/* <Home/> */}
     {/* <Usage/>  */}
         
      {/* <DarkMood/> */}
    {/* / */}
      {/* <CheckNum number={-1}/> */}
       {/* <Click/> */}
       {/* <Fetch/> */}
       {/* <Focus/> */}
       {/* <Hookcounter/> */}
       <Todoapp />
     </div>
  );
}
export default App