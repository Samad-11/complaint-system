import { getSession } from '@/lib/actions/auth'
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
        children
    )
}

export default AuthLayout