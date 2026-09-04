import React from 'react'

const App = () => {

  const user={
    username:'Sarthak',
    age: 18,
    city:"kolkata"

  }

  localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>App</div>
  )
}

export default App