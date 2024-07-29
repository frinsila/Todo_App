// eslint-disable-next-line no-unused-vars
import React, {useEffect,useRef}from 'react'


function Focus() {
   const inputref=useRef(null)
   useEffect(()=>{
     inputref.current.focus()
   },[])
  return (
    <div><input ref={inputref} type='text' /></div>
  )
}

export default Focus
   
  //  const inputref=useRef(null)
  //  useEffect(()=>{
  //   inputref.current.focus()
  //  })
   
   
   
  //  <input  ref={inputref}type="texr"/>