import React, { useState, useEffect } from 'react'
import { FetchContributions } from '../services/ContributionService'

const Details = () => {

  const [details, setDetails] = useState([])

  const fetchContributions = async () => {
    try {
      const data = await FetchContributions()

      setDetails(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchContributions()
    
  }, [])

  const listDetails = details.map((detail, index) => 
    <div className='flex flex-col gap-2 p-4 shadow rounded-xl m-2' key={detail.id}>
      <h1 className='font-bold text-gray-400'>
        {details.length - index}
      </h1>
      <h1 className='font-bold text-2xl'>
        P {detail.payment}
      </h1>
      <h3 className='font-semibold text-gray-400 ml-auto'>
        {detail.date_paid}
      </h3>
    </div>)

  return (
    <div className='w-auto p-4 bg-white shadow rounded-2xl flex-1 flex flex-col gap-2'>
      <h3 className='font-semibold'>Details</h3>
      <h3 className='font-semibold text-gray-700 text-xl sm:text-2xl ml-2'>Ahlan-nour Sencio</h3>
      {/* <h3 className='font-semibold text-gray-500 m-auto'>No Details</h3> */}
      {listDetails}
    </div>
  )
}

export default Details