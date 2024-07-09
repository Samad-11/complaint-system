import { getAllComplaints } from '@/lib/actions/compaint'
import React from 'react'
import MoreButton from './components/MoreButton';

const Table = async () => {
    const data = await getAllComplaints()
    console.log("allData", data);

    return (
        <div className='mt-8'>
            <h1 className='my-6 text-center'>All Complaints</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Status</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Problem Type</th>
                            <th>Received Data</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='sm:text-sm text-xs'>
                        {
                            data?.map((complaint, indx) => (

                                <tr key={complaint.id} className="hover">
                                    <th>{indx + 1}</th>
                                    <th>{complaint.resolved ? "Resolved" : "Pending"}</th>
                                    <td>{complaint.user.name}</td>
                                    <td >
                                        <textarea readOnly className='textarea textarea-disabled textarea-ghost cursor-default'
                                            value={complaint.description}
                                        ></textarea>
                                    </td>
                                    <td>{complaint.type}</td>
                                    <td>{complaint.receivedDate.toLocaleDateString()}</td>
                                    <td className=''>
                                        <MoreButton complaint={complaint} />
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table