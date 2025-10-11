import React from 'react'
import RevenueCard from './components/RevenueCard'

const App = () => {
  return (
    <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"}/>
    </div>
  )
}

export default App
