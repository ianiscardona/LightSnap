import React from 'react'
import { GetStartedCard } from './GetStartedCard'
import { WalkthroughCard } from './WalkthroughCard'

export const Walkthrough = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#F4F0F0] sm:bg-white'>
      <WalkthroughCard />
      {/* <GetStartedCard />  */}
    </div>
  )
}
