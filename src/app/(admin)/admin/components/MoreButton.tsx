'use client'

import { resolveProblem } from "@/lib/actions/compaint";
import { useRef } from "react"

type complaintType = {
    user: {
        id: string;
        email: string;
        name: string;
        password: string;
        phone: string;
        address: string | null;
        active: boolean;
    };
} & {
    id: string;
    description: string;
    receivedDate: Date;
    resolvedDate: Date | null;
    resolved: boolean;
    type: string;
    userId: string;
}
const MoreButton = ({ complaint }: {
    complaint: complaintType
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    return (
        <>
            <button onClick={() => dialogRef.current?.showModal()} className="btn btn-ghost">
                More
            </button>
            <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Complainer&apos;s Name : {complaint.user && complaint.user.name}</h3>
                    <p className="py-4">Contact Number : {complaint.user && complaint.user.phone}</p>
                    <p className="py-4">Email ID : {complaint.user && complaint.user.email}</p>
                    <p className="py-4">Problem Type : {complaint.type}</p>
                    <p className="py-4">Problem description : {complaint.description}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                onClick={async () => {
                                    if (!complaint.resolved) {
                                        await resolveProblem(complaint.id)
                                    }
                                }}
                                className={`btn ${complaint.resolved ? "btn-success" : "btn-error"}`}>
                                {
                                    complaint.resolved ? "Resolved"
                                        : "Not Resolved"
                                }
                            </button>
                        </form>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default MoreButton