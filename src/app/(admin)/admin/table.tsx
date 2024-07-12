import { getAllComplaints } from '@/lib/actions/compaint'
import React from 'react'
import MoreButton from './components/MoreButton';
import TableClient from './components/table-client';

const Table = async ({ complaintsFilter }: { complaintsFilter?: string }) => {

    const data = await getAllComplaints(complaintsFilter)
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minutes: "numeric"
    }
    return (
        <div className='mt-8'>
            <h1 className='my-6 text-center'>All Complaints</h1>
            {
                data
                    ? <TableClient data={data} />
                    : <p>No Complaints</p>
            }
        </div>
    )
}

export default Table