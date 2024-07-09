import React from 'react'

const ComplaintTable = () => {
    return (
        <div className="overflow-x-auto mt-10">
            <h2 className='text-center font-semibold text-2xl'>Complaint History</h2>
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
                    <tr className='hover'>
                        <th>1</th>
                        <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum voluptatum dolorum iusto aliquid rerum deserunt cumque impedit pariatur quos, ex nemo voluptate ad amet illo tempora consequuntur minima reiciendis. Mollitia, enim!</p></td>
                        <td>08th July, 2024</td>
                        <td>Incomplete</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ComplaintTable