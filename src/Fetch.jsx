// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Fetch() {
    function clickhandle(evt){
      evt.preventDefault()
        console.log("i am being clicked");
        // console.log("extra param",extraparam);
        

    }
  return (
    <div>
        {/* <button onClick={ (event)=>clickhandle(event,"btn-1")}>Fetch event</button>
        <button onDoubleClick={clickhandle}>Fetch event</button>
        <button onClick={clickhandle}>Fetch event</button> */}
        {/* <a href='http://www.google.com'>click here</a> */}
        <a href='#test' onClick={clickhandle}>click here</a>
        </div>

  )
}
