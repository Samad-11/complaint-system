import { getSession } from '@/lib/actions/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const AuthLayout = async ({
    children
}:
    {
        children: ReactNode
    }) => {
    const session = await getSession()
    if (session) {
        redirect('/')
    }
    return (
        <main className='relative'>
            {/* <div className='absolute top-0 left-0 w-full h-screen bg-gray-900 opacity-50'></div> */}
            <div className='absolute left-4 sm:left-6 md:left-8 lg:left-10'>

                <figure className='size-14 sm:size-16 md:size-24  lg:size-36 relative '>
                    <Image src={'https://upload.wikimedia.org/wikipedia/commons/8/82/NHPC_Logo_PNG_File.png?20220902073250'}
                        alt='NHPC Logo'
                        fill
                        className='object-contain'
                    />
                </figure>
            </div>
            {children}
        </main>
    )
}

export default AuthLayout