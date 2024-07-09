import React from 'react'

const ComplaintTable = () => {
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
                        <tr className='hover text-xs'>
                            <th>1</th>
                            <td><textarea name="" id=""
                                className='textarea-disabled textarea textarea-ghost bg-transparent text-xs sm:w-96'
                            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, consequuntur porro doloremque cupiditate ipsam excepturi voluptates deserunt est ipsa ut totam voluptatum. Repellendus autem mollitia, accusamus illo et inventore in a cum!</textarea></td>
                            <td>08th July, 2024</td>
                            <td>Incomplete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ComplaintTable