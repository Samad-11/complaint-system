import ComplainForm from '@/components/ComplainForm'
import ComplaintTable from '@/components/ComplaintTable'
import Navbar from '@/components/Navbar'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <div className='px-10 w-full '>
        <ComplainForm />
        <div className="divider"></div>
        <ComplaintTable />
      </div>
    </main>
  )
}

export default HomePage