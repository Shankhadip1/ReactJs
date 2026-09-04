import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // async function getdata(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)

  // }

  const [data, setData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response);

    setData(response.data)
    

  }

  return (
    <div>
      <button onClick={getData}>get data</button>
      <div>
        {data.map((elem,idx)=>{
          return <h3>hello{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
