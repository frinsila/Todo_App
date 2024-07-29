// eslint-disable-next-line no-unused-vars
import React from 'react'

function Click() {
    function clickHandler(){
       console.log("button click");
    }
  return (
    <div>
        <button onClick={clickHandler()}>click</button>
    </div>
  )
}

export default Click