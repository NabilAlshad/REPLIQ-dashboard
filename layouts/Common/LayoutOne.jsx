import React from 'react'

export const LayoutOne = ({left , right}) => {
  return (
    <div className='flex flex-row justify-between mx-auto my-3 mb-3 w-[50%]'>
        <p className='font-bold font-mono text-xl'>{left}</p>
        <p className='text-gray-200 font-mono text-lg'>{right}</p>
    </div>
  )
}

