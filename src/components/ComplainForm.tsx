import React from 'react'

const ComplainForm = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='w-full max-w-7xl'>
                <h1
                    className='text-2xl font-semibold my-5 text-center'
                >Fill all the fields precisely</h1>
                <form action="
                ">

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Problem Type</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Select Problem Type</option>
                            <option>Keyboard</option>
                            <option>Mouse</option>
                            <option>CPU</option>
                            <option>Printer</option>
                            <option>Scanner</option>
                            <option>Network</option>
                            <option>Mic</option>
                            <option>Speaker</option>
                            <option>Other</option>
                        </select>

                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Complaint</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Enter your complaint..."></textarea>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default ComplainForm