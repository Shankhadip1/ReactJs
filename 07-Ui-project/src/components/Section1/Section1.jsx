import React from 'react'
import Navbar from './Navbar'
import Page1Contect from './Page1Contect'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
      <Navbar/>
      <Page1Contect users={props.users}/>
    </div>
  )
}

export default Section1
