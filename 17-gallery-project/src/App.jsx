import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    
    setUserData(response.data);
    console.log(userData);
    
  }

  useEffect(() => {
    
    getData()
  }, [index])
  

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map((elem,idx)=>{
      return <div className='' key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
      <h1 className='fixed'>{index}</h1>
        <div className='flex h-[82%] flex-wrap gap-4'>
              {printUserData}
        </div>

        <div className='flex justify-center items-center p-4 gap-6'>
          <button
          style={{opacity:index == 1?0:1}}
          onClick={()=>{
            if(index>1){
            setIndex(index-1)
            setUserData([])
            }
          }}
           className='bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-bold'>
            Prev</button>
            <h4>page {index}</h4>
          <button
          onClick={()=>{
            setIndex(index+1)
            setUserData([])
          }}
           className='bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-bold'>Next</button>
        </div>
    </div>
  )
}

export default App