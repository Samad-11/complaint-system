import MoreButton from './MoreButton';
import Filter from './Filter';


export type complaintType = {
    id: string;
    description: string;
    receivedDate: Date,
    resolvedDate: Date | null,
    resolved: boolean,
    type: string,
    userId: string | null,
    user: {
        id: string;
        email: string;
        name: string;
        department: string;
        password: string;
        phone: string;
        address: string | null;
        active: boolean;
    } | null;
}


const TableClient = ({ data }: { data: complaintType[] }) => {

    return (
        <>
            <Filter />
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
                            <th>Received Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='sm:text-sm text-xs'>
                        {
                            data?.map((complaint, indx) => (

                                <tr key={complaint.id} className="hover">
                                    <th>{indx + 1}</th>
                                    <th>{complaint.resolved ? "Resolved" : "Pending"}</th>
                                    <td>{complaint.user ? complaint.user.name : "Guest"}</td>
                                    <td >
                                        <textarea readOnly className='textarea textarea-disabled textarea-ghost cursor-default'
                                            value={complaint.description}
                                        ></textarea>
                                    </td>
                                    <td>{complaint.type}</td>
                                    <td>{complaint.receivedDate.toLocaleDateString("en-US", { year: "2-digit", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" })}</td>
                                    <td className=''>
                                        {
                                            complaint.user &&
                                            <MoreButton

                                                description={complaint.description}
                                                email={complaint.user.email}
                                                userName={complaint.user.name}
                                                id={complaint.id}
                                                phone={complaint.user.phone}
                                                resolved={complaint.resolved}
                                                type={complaint.type}
                                                department={complaint.user.department || "Other"}
                                            />
                                        }
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableClient