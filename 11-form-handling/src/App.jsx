import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  return (
    <div>
      <form action="">
        <input type="text"
        value={title} 
        onChange={(e)=>{

        settitle(e.target.value)}}
        placeholder='Enter Your Name' name="" id="" />
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App