'use client'
import React, { useId, useRef } from 'react'
import SubmitButton from '../app/(auh)/components/SubmitButton'
import { useFormState } from 'react-dom'
import { addNewComplaint } from '@/lib/actions/compaint'

const ComplainForm = ({ userId }: { userId: string }) => {
    const [state, formAction] = useFormState(addNewComplaint, { errors: [] })
    const formRef = useRef<HTMLFormElement>(null)
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='w-full max-w-7xl'>
                <h1
                    className='text-2xl font-semibold my-5 text-center'
                >Fill all the fields precisely</h1>
                <form ref={formRef} action={async (e: FormData) => {
                    await formAction(e)
                    formRef?.current?.reset();
                }}
                    className='space-y-8'
                >

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Problem Type</span>
                        </div>
                        <select name='problemType' defaultValue={''} className="select select-bordered">
                            <option disabled value={''}>Select Problem Type</option>
                            <option value={'Keyboard'}>Keyboard</option>
                            <option value={'Mouse'}>Mouse</option>
                            <option value={'CPU'}>CPU</option>
                            <option value={'Printer'}>Printer</option>
                            <option value={'Scanner'}>Scanner</option>
                            <option value={'Network'}>Network</option>
                            <option value={'Mic'}>Mic</option>
                            <option value={'Speaker'}>Speaker</option>
                            <option value={'Other'}>Other</option>
                        </select>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Complaint Description</span>
                        </div>
                        <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Enter your complaint description..."></textarea>
                    </label>
                    <input type="text" name="userId" hidden value={userId} />
                    <SubmitButton buttonText='Send Complaint'
                        className="ghost bg-transparent mt-8 text-white border-white hover:scale-95 transition-all"
                    />
                </form>
            </div>
        </div>
    )
}

export default ComplainForm