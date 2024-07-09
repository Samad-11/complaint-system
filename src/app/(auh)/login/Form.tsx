'use client'

import PasswordField from '@/components/PasswordField'
import { login } from '@/lib/actions/auth'
import Link from 'next/link'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { MdOutlineEmail, MdOutlineVpnKey } from 'react-icons/md'
import ErrorMessages from '../components/ErrorMessages'
import { findErrors } from '../components/findErrors'
import SubmitButton from '../components/SubmitButton'


const Form = () => {
    const [state, formAction] = useFormState(login, { errors: [] })
    const { pending } = useFormStatus()
    const emailError = findErrors('email', state?.errors!)
    const passwordError = findErrors('password', state?.errors!)
    return (
        <div>
            <form action={formAction}
                className='space-y-3 w-full'
            >
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input name='email' type="text" className="grow" placeholder="Email ID" />
                    <MdOutlineEmail />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    <ErrorMessages errors={emailError} />
                </span>
                <PasswordField />
                <span className="label-text-alt text-red-500 text-right">
                    <ErrorMessages errors={passwordError} />
                </span>
                <div className=' flex justify-end pr-5'>
                    <Link href={'/forget-password'} className='text-sm font-bold text-right'>Forget Password ?</Link>
                </div>
                <SubmitButton buttonText="Login" />
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