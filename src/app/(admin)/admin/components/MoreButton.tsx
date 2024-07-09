'use client'

import { resolveProblem } from "@/lib/actions/compaint";
import { useRef } from "react"

type propT = {
    userName: string,
    phone: string,
    email: string,
    description: string,
    type: string,
    id: string,
    resolved: boolean,
}
const MoreButton = ({ userName, phone, email, type, description, resolved, id }: propT) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    return (
        <>
            <button onClick={() => dialogRef.current?.showModal()} className="btn btn-ghost">
                More
            </button>
            <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Complainer&apos;s Name : {userName}</h3>
                    <p className="py-4">Contact Number : {phone}</p>
                    <p className="py-4">Email ID : {email}</p>
                    <p className="py-4">Problem Type : {type}</p>
                    <p className="py-4">Problem description : {description}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                onClick={async () => {
                                    if (!resolved) {
                                        await resolveProblem(id)
                                    }
                                }}
                                className={`btn ${resolved ? "btn-success" : "btn-error"}`}>
                                {
                                    resolved ? "Resolved"
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