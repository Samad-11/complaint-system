import ComplainForm from '@/components/ComplainForm'
import ComplaintTable from '@/components/ComplaintTable'
import Navbar from '@/components/Navbar'
import { getSession, isAuth } from '@/lib/actions/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const HomePage = async () => {
  const session = await getSession();
  const isAdmin = await isAuth()
  if (isAdmin) {
    return redirect('/admin')
  }
  if (!session) {
    return redirect('/login')
  }

  const obj = (JSON.parse(JSON.stringify(session)));
  console.log(obj.userWithoutPassword);


  return (
    <main>
      <Navbar userName={obj?.userWithoutPassword?.name} />
      <div className='px-10 w-full '>
        <ComplainForm userId={obj.userWithoutPassword.id!} />
        <div className="divider"></div>
        <ComplaintTable userId={obj.userWithoutPassword.id!} />
      </div>
    </main>
  )
}

export default HomePage