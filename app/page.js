"use client"
import React, { useState } from 'react'

const todoList = () => {
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submit = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { task, desc }])
    setTask("")
    setDesc("")
  }
  const deleteTask = (i) => {
    let newTasks = [...mainTask]
    newTasks.splice(i,1)
    setMainTask(newTasks)
}
  let taskBox = <h2>No tasks available.</h2>;

  if(mainTask.length > 0){
    taskBox = mainTask.map((td,i) => {
      return <li className='flex justify-between mb-5 '>
       <div className='flex justify-between mb-5 w-2/3'><h3 className='text-2xl font-semibold'>{td.task}</h3>
       <p className='text-xl '>{td.desc}</p></div>
       <button 
       className='bg-red-500 px-4 py-2 rounded text-white'
       onClick={()=>{deleteTask(i)}}
       >Delete</button>
      </li>
 });
 
  }
  return (
    <>
      <div className='bg-teal-300 h-screen'>
        <h1 className='bg-black text-teal-300 py-5 text-center text-5xl font-bold font-serif'>Bijay's TodoList</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder='Enter Task'
            className='text-2xl border-zinc-800 border-2 m-10 px-4 py-2 rounded'
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder='Description'
            className='text-2xl border-zinc-800 border-2 m-10 px-4 py-2 rounded'
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button className='text-2xl bg-zinc-800 m-10 px-4 py-2 rounded text-white'>Add Task</button>
        </form>
        <hr />
        <div className='bg-slate-100 p-5 m-2 '>{taskBox}</div>
      </div>

    </>
  )
}

export default todoList