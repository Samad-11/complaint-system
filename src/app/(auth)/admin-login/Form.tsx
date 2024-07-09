'use client'

import PasswordField from '@/components/PasswordField'
import { adminLogin, login } from '@/lib/actions/auth'
import Link from 'next/link'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { MdOutlineEmail, MdOutlineVpnKey } from 'react-icons/md'
import ErrorMessages from '../components/ErrorMessages'
import { findErrors } from '../components/findErrors'
import SubmitButton from '../components/SubmitButton'


const Form = () => {
    const [state, formAction] = useFormState(adminLogin, { errors: [], invalidCredention: undefined })

    const nameError = findErrors('name', state?.errors!)
    const passwordError = findErrors('password', state?.errors!)

    return (
        <div>
            <form action={formAction}
                className='space-y-3 w-full'
            >
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input required name='name' type="text" className="grow" placeholder="User Name" />
                    <MdOutlineEmail />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    {nameError && <ErrorMessages errors={nameError} />}
                    {state?.invalidCredention && <div>{state.invalidCredention}</div>}
                </span>
                <PasswordField />
                <span className="label-text-alt text-red-500 text-right">
                    {passwordError && <ErrorMessages errors={passwordError} />}
                    {state?.invalidCredention && <div>{state.invalidCredention}</div>}

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