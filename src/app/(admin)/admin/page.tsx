import NavbarAdmin from '@/components/NavbarAdmin'
import React from 'react'
import Table from './table'

const AdminPage = () => {
    return (
        <main className='px-3'>
            <NavbarAdmin />
            <Table />
        </main>
    )
}

export default AdminPage