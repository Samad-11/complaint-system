import React from 'react'
import bg from '../../../../public/assets/images/bg-Images/b1.jpg'
import { MdOutlineEmail, MdOutlineVpnKey } from 'react-icons/md'
import Link from 'next/link'
import Form from './Form'

const LoginPage = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center flex-col">
                    <div className="max-w-sm sm:min-w-[33rem]  sm:px-6 py-7 sm:border rounded-lg sm:backdrop-blur-sm">
                        <h1 className="mb-8 text-5xl font-bold">Login</h1>
                        <Form />
                    </div>
                    <Link href={'/admin-login'} className='self-start pl-10 font-semibold'>Admin</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage