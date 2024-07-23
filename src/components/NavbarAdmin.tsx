'use client'
import { adminLogout } from '@/lib/actions/auth'
import Image from 'next/image'
import React from 'react'

const NavbarAdmin = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 text-xl none">
                <figure className='relative lg:size-20 md:size-16 sm:size-12 size-10 mr-1'>
                    <Image
                        fill
                        className='object-contain'
                        src={'https://upload.wikimedia.org/wikipedia/commons/8/82/NHPC_Logo_PNG_File.png?20220902073250'}
                        alt="NHPC Logo" />
                </figure>
                Complaint Box Admin

            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li className='text-center'>Admin</li>
                        <li>
                            <button className='btn btn-ghost'
                                onClick={async () => {
                                    await adminLogout()
                                }}
                                type="button">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin