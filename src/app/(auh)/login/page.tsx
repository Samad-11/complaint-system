import React from 'react'
import bg from '../../../../public/assets/images/bg-Images/b2.jpg'
import { MdOutlineEmail, MdOutlineVpnKey } from 'react-icons/md'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg min-w-[33rem] px-6 py-7 border rounded-lg backdrop-blur-sm">
                        <h1 className="mb-8 text-5xl font-bold">Login</h1>
                        <div>
                            <form action="
                            "
                                className='space-y-3 w-full'
                            >
                                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent ">
                                    <input type="text" className="grow" placeholder="Email ID" />
                                    <MdOutlineEmail />

                                </label>
                                <label className="input input-bordered  flex items-center gap-2 rounded-full  bg-transparent">
                                    <input type="password" className="grow" placeholder="Password" />
                                    <MdOutlineVpnKey />
                                </label>
                                <div className=' flex justify-end pr-5'>
                                    <Link href={'/forget-password'} className='text-sm font-bold text-right'>Forget Password ?</Link>
                                </div>
                                <button className="btn mx-auto w-full rounded-full bg-white text-black
                                                                hover:bg-transparent hover:border-white hover:text-white

                                ">
                                    Login
                                </button>
                                <div className=' flex justify-center pr-5'>
                                    <p className='text-sm font-bold text-right'>Do not have an account ?
                                        <Link href={'register'}> Register</Link>
                                    </p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage