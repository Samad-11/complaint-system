import PasswordField from '@/components/PasswordField'
import Link from 'next/link'
import React from 'react'
import { MdOutlineEmail, MdOutlineVpnKey } from 'react-icons/md'

const Form = () => {
    return (
        <div>
            <form action="
    "
                className='space-y-3 w-full'
            >
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input type="text" className="grow" placeholder="Email ID" />
                    <MdOutlineEmail />

                </label>
                <PasswordField />
                <div className=' flex justify-end pr-5'>
                    <Link href={'/forget-password'} className='text-sm font-bold text-right'>Forget Password ?</Link>
                </div>
                <button className="btn mx-auto w-full rounded-full bg-white text-black
                                        hover:bg-transparent hover:border-white hover:text-white">
                    Login
                </button>
                <div className=' flex justify-center pr-5'>
                    <p className='text-sm font-bold text-right'>Do not have an account ?
                        <Link href={'register'}> Register</Link>
                    </p>
                </div>
            </form>

        </div>
    )
}

export default Form