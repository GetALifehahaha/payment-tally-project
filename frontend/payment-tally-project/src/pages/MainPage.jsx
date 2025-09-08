import React from 'react'
import {Details, ContributorList, TotalBalance} from '../components'

const MainPage = () => {
  return (
    <>
      <TotalBalance />
      <div className='flex flex-col sm:flex-row sm: w-auto m-8 gap-4'>
        <ContributorList />
        <Details />
      </div>
    </>
  )
}

export default MainPage