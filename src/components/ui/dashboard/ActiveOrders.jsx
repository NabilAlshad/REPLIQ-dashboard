import React from 'react'

import { Button } from './../../Root/Form/Button';

export  const ActiveOrders = () => {
  return (
    <div className="flex flex-col">
    <div className='flex flew-row justify-between w-[40%] p-5 mx-auto'>
        <h3 className='font-bold text-2xl text-black font-mono'>Active Orders</h3>
        <p className=' text-2xl text-gray-400 font-mono'>view all </p>
        </div>
        <div className='flex flex-row justify-between w-[40%] p-5 mx-auto'>
            <Button title="Pending(200)" buttonClass="bg-blue-400 p-2 text-white rounded-2xl" />
            <Button title="Accepted(130)" className="bg-blue-500 p-2 text-black rounded-2xl" />
            <Button title="Shipped" className="bg-blue-500 p-2 text-black rounded-2xl" />
        </div>
    </div>

  )
}

