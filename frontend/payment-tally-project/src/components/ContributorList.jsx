import React, { useState, useEffect, use } from 'react'
import { FetchContributors } from '../services/ContributorService'

const ContributorList = () => {

  const [contributorList, setContributorList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [payModalIsOpen, setPayModalIsOpen] = useState(false);
  const [payModalId, setPayModalId] = useState(null);

  const fetchData = async () => {
    try {
      const data = await FetchContributors();

      if (data.Error) {
        setErrorMessage(data.Error.toString());
      }

      setContributorList(data);
      setErrorMessage("");

    } catch (err) {
      setErrorMessage(err.toString());
    }
  };

  const listContributor = contributorList.map(contributor => 
  <div key={contributor.id} className='relative p-4 shadow rounded-xl m-2'>
    <h3 className='font-semibold'>{contributor.first_name + ' ' + contributor.last_name}</h3>
    <div className='flex gap-2 text-2xl font-semibold'>
      {
        contributor.balance >= 0 ? <h1>Balance: <strong className='text-green-700 font-semibold'>{contributor.balance}</strong></h1> : 
                                    <h1>Due: <strong className='text-red-600 font-semibold'>{contributor.balance}</strong></h1>
      }
    </div>
    <div className='mt-4 w-min ml-auto flex gap-2'>
      <button className='py-1 px-4 bg-orange-400 rounded-full font-semibold text-white'>Details</button>
      <button onClick={() => handleSetModalIsOpen(contributor.id)} className='py-1 px-4 bg-green-400 rounded-full font-semibold text-white cursor-pointer'>Pay</button>
    </div>

    {/* Pop-up */}
    {
      (payModalId === contributor.id && <h1 className='absolute right-0 top-0 sm:left-full sm:ml-2 sm:top-0 sm:w-min p-4 shadow rounded-xl h-full bg-white duration-150 flex flex-col z-20'>
        <input type='text' className='border-b-2 border-gray-600' placeholder='Set amount'></input>
        <button className='mt-auto py-1 px-4 bg-green-400 rounded-full font-semibold text-white cursor-pointer'>Submit Pay</button>
        <button className='rounded-full bg-red-600 font-semibold text-white absolute left-full ml-2 top-0 aspect-square w-6 h-6 cursor-pointer'
                onClick={() => setPayModalId(null)}
                            >X</button>
      </h1>)
    }
  </div>)

  useEffect(() => {
    fetchData();
  }, []);

  const handleSetModalIsOpen = (id) => {
    setPayModalIsOpen(!payModalIsOpen)
    setPayModalId(id)
  }

  return (
    <div className='w-auto p-4 bg-white shadow rounded-2xl flex-1 flex flex-col gap-2'>
      <h5 className='font-semibold'>Distributors</h5>
      {listContributor}
      {errorMessage}
    </div>
  )
}

export default ContributorList