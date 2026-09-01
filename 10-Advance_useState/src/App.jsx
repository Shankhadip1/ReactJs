import React, { useState } from 'react'

const App = () => {

//   const [num, setNum]= useState(10)
// const btnClicked = () => {
// setNum(prev => (prev + 1))
// setNum(prev => (prev + 1))
// setNum(prev => (prev + 1))
// }

const [num, setNum] = useState({user:'shankha',age:28})

const btnClicked = ()=>{
  const newNum={...num};
  newNum.user='sayan';
  setNum(newNum)
  
     
}
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
