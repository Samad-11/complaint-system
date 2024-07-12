'use client'
import { getAllComplaints } from '@/lib/actions/compaint'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { SyntheticEvent, useEffect } from 'react'

const Filter = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('complaints')
    const router = useRouter()

    const onClickHandler = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        const params = new URLSearchParams(searchParams.toString())

        const value = target.value

        if (value === "" || value.length < 1) {
            router.push('/admin')
        } else {
            params.set('complaints', value)
            router.push(`/admin?${params.toString()}`)
        }

    }

    return (
        <div className='flex gap-x-3'>
            <div className="form-control  w-fit" >
                <label


                    className="flex items-center flex-col-reverse  cursor-pointer p-0 justify-center gap-1">
                    <span className='font-semibold'>All</span>
                    <input
                        onChange={onClickHandler}

                        value={""}
                        checked={search === null || ((search !== 'resolved') && (search !== 'pending'))}
                        type="radio" name="radio-10" className="radio checked:bg-gray-500" />
                </label>
            </div>
            <div className="form-control  w-fit" >
                <label

                    className="flex items-center flex-col-reverse  cursor-pointer p-0 justify-center gap-1">
                    <span className='font-semibold'>Resolved</span>
                    <input
                        onChange={onClickHandler}

                        value={'resolved'}
                        type="radio" name="radio-10"
                        checked={search === "resolved"}
                        className={`radio checked:bg-green-500`} />
                </label>
            </div>
            <div className="form-control w-fit" >
                <label

                    className="flex items-center flex-col-reverse  cursor-pointer p-0 justify-center gap-1">
                    <span className='font-semibold'>Pending</span>
                    <input
                        onChange={onClickHandler}
                        value={'pending'}
                        checked={search === 'pending'}
                        type="radio" name="radio-10" className="radio checked:bg-red-500" />
                </label>
            </div>
        </div>
    )
}

export default Filter