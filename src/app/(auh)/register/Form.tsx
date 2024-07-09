import PasswordField from '@/components/PasswordField'
import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlinePhoneEnabled, MdOutlineEmail, MdOutlineVpnKey, MdOutlineAddLocationAlt } from 'react-icons/md'

const Form = () => {
    return (
        <div>

            <form action="" className='space-y-3 w-full'
            >
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm">
                    <input type="text" className="grow" placeholder="Name" />
                    <FaRegUserCircle />

                </label>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input type="text" className="grow" placeholder="Address" />
                    <MdOutlineAddLocationAlt />

                </label>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input type="tel" className="grow" placeholder="Phone" />
                    <MdOutlinePhoneEnabled />

                </label>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input type="text" className="grow" placeholder="Email ID" />
                    <MdOutlineEmail />

                </label>
                <PasswordField />

                <button className="btn mx-auto w-full rounded-full bg-white text-black
                                hover:bg-transparent hover:border-white hover:text-white
                                ">
                    Register
                </button>
                <div className=' flex justify-center pr-5'>
                    <p className='text-sm font-bold text-right'>Already have an account ?
                        <Link href={'/login'}> Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Form