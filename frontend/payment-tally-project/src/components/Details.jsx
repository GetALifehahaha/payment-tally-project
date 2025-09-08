import React, { useState, useEffect } from 'react'

const Details = () => {

  const [details, setDetails] = useState()

  return (
    <div className='w-auto p-4 bg-white shadow rounded-2xl flex-1 flex flex-col gap-2'>
      <h3 className='font-semibold'>Details</h3>
      <h3 className='font-semibold text-gray-700 text-xl sm:text-2xl ml-2'>Ahlan-nour Sencio</h3>
      <h3 className='font-semibold text-gray-500 m-auto'>No Details</h3>
    </div>
  )
}

export default Details