import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
           <h2 className='font-bold bg-white rounded-full h-12 w-12 justify-center items-center flex'>{props.id+1}</h2>
           <div>
            <p className='text-lg leading-normal text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quo suscipit excepturi libero perferendis rerum?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-semibold px-8 py-2 rounded-full text-lg '>{props.tag}</button>
                <button className='bg-blue-600 text-white font-semibold px-4 py-2 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
           </div>
           
        </div>
        </div>
  )
}

export default RightCardContent
