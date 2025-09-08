import React from 'react'

const TotalBalance = () => {
  return (
    <div className='w-[90vw] sm:w-[60vw] bg-white py-4 px-8 mx-auto mt-4 shadow rounded-2xl
                    flex flex-col gap-4 
                    '>
      <h3 className='font-semibold'>Total Balance</h3>
      <h1 className='font-bold text-3xl sm:text-5xl'>P 1,000.00</h1>

      <div className='ml-auto flex gap-2'>
        <button id='deduct' className='py-1 px-4 bg-red-400 rounded-full font-semibold text-white'>DEDUCT</button>
        <button id='details' className='py-1 px-4 bg-green-400 rounded-full font-semibold text-white'>V</button>
      </div>
    </div>
  )
}

export default TotalBalance