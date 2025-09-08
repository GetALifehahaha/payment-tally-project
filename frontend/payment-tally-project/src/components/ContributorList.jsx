import React, { useState, useEffect } from 'react'
import { FetchContributors } from '../services/ContributorService'

const ContributorList = () => {

  const [contributorList, setContributorList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [payModalIsOpen, setPayModalIsOpen] = useState(false);
  const [payButton, setPayButton] = useState("Pay")

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
    <h3>{contributor.first_name + ' ' + contributor.last_name}</h3>
    <div className='flex gap-2 text-2xl font-semibold'>
      <h1>Balance: 0</h1>
      <h1>Due: 20</h1>
    </div>
    <div className='mt-4 w-min ml-auto flex gap-2'>
      <button className='py-1 px-4 bg-orange-400 rounded-full font-semibold text-white'>Details</button>
      <button onClick={() => handleSetModalIsOpen(contributor.id)} className='py-1 px-4 bg-green-400 rounded-full font-semibold text-white'>{payButton}</button>
    </div>

    {/* Pop-up */}
    {
      (payModalIsOpen && <h1 className='absolute left-full ml-2 top-0 p-4 bg-white outline-1'>
        <input type='text'></input>
        <button>Submit Pay</button>
      </h1>)
    }
  </div>)

  useEffect(() => {
    fetchData();
  }, []);

  const handleSetModalIsOpen = () => {
    setPayModalIsOpen(!payModalIsOpen)

    handleSetPayButton()
  }

  const handleSetPayButton = () => {
    if (!payModalIsOpen) {
      setPayButton("Close")
    } else {
      setPayButton("Pay")
    }
  }

  return (
    <div className='w-auto p-4 bg-white shadow rounded-2xl flex-1 flex flex-col gap-2'>
      {listContributor}
      {errorMessage}
    </div>
  )
}

export default ContributorList