'use client'

import PasswordField from '@/components/PasswordField'
import { register } from '@/lib/actions/auth'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlinePhoneEnabled, MdOutlineEmail, MdOutlineVpnKey, MdOutlineAddLocationAlt, MdOutlineHomeRepairService } from 'react-icons/md'
import ErrorMessages from '../components/ErrorMessages'
import { findErrors } from '../components/findErrors'
import SubmitButton from '../components/SubmitButton'


const Form = () => {
    const [state, formAction] = useFormState(register, { errors: [], mailOrPhoneExists: undefined })
    const nameError = findErrors("name", state?.errors!)
    const emailError = findErrors("email", state?.errors!)
    const phoneError = findErrors("phone", state?.errors!)
    const addressError = findErrors("address", state?.errors!)
    const passwordError = findErrors("password", state?.errors!)

    const optionsArray = [
        'Information Technology & Communication(IT&C)',
        'Human Resources(HR)',
        'Finance',
        'Downstream',
        'Power House',
        'Corporate Social Responsibility(CSR)',
        'Technical Division',
        'Civil Infra Works(CIW)',
        'Environment',
        'Central Library',
        'Quality Control(Q&C)',
        'Department of Official Language(Rajbhasha Vibhaag)',
        'Records Management',
        'Security & Safety Department',
        'Medical Service',
        'Law Department',
        'other'
    ];

    return (
        <div>
            <form action={formAction} className='space-y-3 w-full'
            >
                <label className=" input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm">
                    <input required type="text" name='name' className="grow" placeholder="Name" />
                    <FaRegUserCircle />

                </label>
                <label className=" input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm">
                    <select name='department' defaultValue={''} className="select bg-transparent w-full border-none focus:border-none focus:outline-none px-0
                    "
                        required>
                        <option disabled className='pb-1 '
                            value={''}>Department</option>
                        {
                            optionsArray.map((option, index) => (
                                <option className='mb-1 backdrop-blur-sm' key={index} value={option}>{option}</option>
                            ))
                        }


                    </select>
                    <MdOutlineHomeRepairService />
                </label>
                <span className="label-text-alt text-red-500 text-right">
                    {nameError && <ErrorMessages errors={nameError} />}
                </span>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input required type="text" name='address' className="grow" placeholder="Address" />
                    <MdOutlineAddLocationAlt />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    {addressError && <ErrorMessages errors={addressError} />}
                </span>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input required type="tel" name='phone' className="grow" placeholder="Phone" />
                    <MdOutlinePhoneEnabled />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    {phoneError && <ErrorMessages errors={phoneError} />}
                    {state?.mailOrPhoneExists && <div>{state.mailOrPhoneExists}</div>}
                </span>
                <label className="input input-bordered flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm ">
                    <input required type="text" name='email' className="grow" placeholder="Email ID" />
                    <MdOutlineEmail />

                </label>
                <span className="label-text-alt text-red-500 text-right">
                    {emailError && <ErrorMessages errors={emailError} />}
                    {state?.mailOrPhoneExists && <div>{state.mailOrPhoneExists}</div>}

                </span>
                <PasswordField />
                <span className="label-text-alt text-red-500 text-right">
                    {passwordError && <ErrorMessages errors={passwordError} />}
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

