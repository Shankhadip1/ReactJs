import React, { useState } from 'react'
import Notes from './Components/Notes';

const App = () => {

  
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandaler = (e) =>{
    e.preventDefault()
    
    const copyTask = [...task];
    copyTask.push({title,detail})
    setTask(copyTask)
    
    
    setTitle('')
    setDetail('')
    
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  


  return (
    
    <div className='h-screen lg:flex bg-black text-white '>
     
        <form onSubmit={(e)=>{
          submitHandaler(e)
        }} className='flex lg:w-1/2 p-10 gap-4  flex-col items-start'>
           <h1 className='text-4xl font-bold'>Add Notes</h1>

             <input 
            type="text"
             placeholder='Enter Notes Heading'
             className='px-5 w-full font-medium  py-2 border-2 rounded outline-none ' 
             value={title}
             onChange={(e)=>{
              setTitle(e.target.value)

             }}
             />

             <textarea type="text"
             placeholder='Write Details'
             className='px-5 h-20 w-full py-2 border-2 rounded outline-none'
               value={detail}
               onChange={(e)=>{
                    setDetail(e.target.value)
               }}
               />

               <button type='submit' className='bg-white active:bg-gray-400  w-full text-black outline-none px-5 py-2 rounded'>Add Notes</button>
              
           

            
        </form>

        <div className='lg:w-1/2 lg:border-l-2   p-10'>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className='flex overflow-auto h-full flex-wrap gap-5 mt-5'>
         
         {task.map((elem,idx)=>(
          <Notes key={idx} elem={elem} deleteNote={deleteNote} />
           
         ))}
         
        </div>
          
        </div>
    </div>
  )
}

export default App