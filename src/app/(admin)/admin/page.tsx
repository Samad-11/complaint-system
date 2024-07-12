import NavbarAdmin from '@/components/NavbarAdmin'
import React from 'react'
import Table from './table'

const AdminPage = ({ searchParams }: { searchParams: { complaints: string } }) => {
    return (
        <main className='px-3'>
            <NavbarAdmin />
            <Table complaintsFilter={searchParams.complaints} />
        </main>
    )
}

export default AdminPage