import React from 'react'

import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
 const users=[
  {
    img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Satisfied'
  },
  {
      img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'underServed'
  },
  {
      img:'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Underbanked'
  },
  {
      img:'https://plus.unsplash.com/premium_photo-1670884442927-e647436e12ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Undervr'
  },
 ]

  return (
    <div className=''>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
