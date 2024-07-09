'use client'
import { logout } from '@/lib/actions/auth'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'

const Navbar = ({ userName }: { userName?: string }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    Complaint Box
                </a>
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
                    <ul tabIndex={0} className="dropdown-content menu bg-gray-300 text-black rounded-box z-[1] w-52 p-2 shadow">
                        <li className='flex justify-center flex-row items-center capitalize'>
                            <span>{userName ? userName : "Guest"}</span>
                            <span><FaRegUserCircle /></span>
                        </li>
                        <li className='flex justify-center flex-row items-center'
                            onClick={async () => {

                                await logout();
                            }}
                        >
                            <span>Logout</span>
                            <span><IoMdLogOut /></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar