// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Todoapp.css'

function Todoapp() {
    const [todo, todoset] = useState("")
    const [todos, settodos] = useState([])
    function addtodo(e) {
        e.preventDefault()
        if (todo.length > 0) {
            settodos([...todos, todo])
            alert("todo add successfully")
        } else {
            alert("add somthing..")
        }

    }
     const handledelete=(index)=>{
        const filtered=todos.filter((_,inx)=>inx!==index);
        settodos(filtered)
   
     }
    //  const handleedit=()=>{
        
    //  }
    return (
        <div className='todo-container'>
            <h1 >Todo App</h1>
            <form onSubmit={addtodo} className='input-section'>
                <input onChange={(e) => todoset(e.target.value)} type='text' placeholder='enter text' />
                <button type='submit'>submitt</button>
            </form>
              

            {todos.map((item, index) => (
            <div key={index} className='item'>
                <h1>{item}</h1>
                <button onClick={()=>handledelete(index)}>Delete</button>
                {/* <button onClick={handleedit()}>edit</button> */}
            </div>
            ))}
        </div>
     

    )
}

export default Todoapp
