'use client'

import PasswordField from '@/components/PasswordField'
import { register } from '@/lib/actions/auth'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlinePhoneEnabled, MdOutlineEmail, MdOutlineVpnKey, MdOutlineAddLocationAlt } from 'react-icons/md'
import ErrorMessages from '../components/ErrorMessages'
import { findErrors } from '../components/findErrors'
import SubmitButton from '../components/SubmitButton'


const Form = () => {
    const [state, formAction] = useFormState(register, { errors: [] })
    const nameError = findErrors("name", state.errors!)
    const emailError = findErrors("email", state.errors!)
    const phoneError = findErrors("phone", state.errors!)
    const addressError = findErrors("address", state.errors!)
    const passwordError = findErrors("password", state.errors!)
    return (
        <div>
            <form action={formAction} className='space-y-3 w-full'
            >
                <label className=" input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm">
                    <input type="text" name='name' className="grow" placeholder="Name" />
                    <FaRegUserCircle />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    <ErrorMessages errors={nameError} />
                </span>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input type="text" name='address' className="grow" placeholder="Address" />
                    <MdOutlineAddLocationAlt />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    <ErrorMessages errors={addressError} />
                </span>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input type="tel" name='phone' className="grow" placeholder="Phone" />
                    <MdOutlinePhoneEnabled />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    <ErrorMessages errors={phoneError} />
                </span>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input type="text" name='email' className="grow" placeholder="Email ID" />
                    <MdOutlineEmail />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    <ErrorMessages errors={emailError} />
                </span>
                <PasswordField />
                <span className="label-text-alt text-red-500 text-right">
                    <ErrorMessages errors={passwordError} />
                </span>
                <SubmitButton buttonText='Register' />
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

