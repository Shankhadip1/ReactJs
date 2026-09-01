import React from 'react'

const App = () => {

  function type(val){
    console.log(val);
  }

  return (
    <div>
      <input onChange={function(elem){
            type(elem.target.value)
      }} type="text" placeholder='enter text' />
    </div>
  )
}

export default App
