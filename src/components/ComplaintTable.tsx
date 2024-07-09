import { getUserComplaints } from '@/lib/actions/compaint'
import React from 'react'

const ComplaintTable = async ({ userId }: { userId: string }) => {

    const data = await getUserComplaints(userId)
    return (

        <>
            <h2 className='text-center font-semibold text-2xl'>Complaint History</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Complaint</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.complaints.map((complaint, indx) => (
                                <tr key={complaint.id} className='hover text-xs'>
                                    <th>{indx + 1}</th>
                                    <td><textarea readOnly
                                        className='cursor-default textarea-disabled textarea textarea-ghost bg-transparent text-xs sm:w-96'
                                        value={complaint.description}
                                    ></textarea></td>
                                    <td>{complaint.receivedDate.toLocaleDateString()}</td>
                                    <td>{complaint.resolved ? "Resolved" : "Pending"}</td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ComplaintTable