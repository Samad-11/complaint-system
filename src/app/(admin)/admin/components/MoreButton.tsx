'use client'

import { resolveProblem } from "@/lib/actions/compaint";
import { Dispatch, SetStateAction, useRef } from "react"
import { complaintType } from "./table-client";

type propT = {
    userName: string,
    department: string,
    phone: string,
    email: string,
    description: string,
    type: string,
    id: string,
    resolved: boolean,
}
const MoreButton = ({ userName, phone, email, type, description, resolved, department, id }: propT) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    return (
        <>
            <button onClick={() => dialogRef.current?.showModal()} className="btn btn-ghost">
                More
            </button>
            <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="grid grid-cols-2 gap-y-2">
                        <div className="col-span-1">
                            Name
                        </div>
                        <div className="col-span-1">
                            <h3 className=" capitalize">{userName}</h3>
                        </div>
                        <div className="col-span-1">
                            Department
                        </div>
                        <div className="grid-cols-1">
                            <p className="">{department}</p>
                        </div>
                        <div className="col-span-1">
                            Email ID
                        </div>
                        <div className="col-span-1">
                            <p className="">{email}</p>
                        </div>
                        <div className="col-span-1">
                            Phone
                        </div>
                        <div className="col-span-1">
                            <p className="">{phone}</p>
                        </div>
                        <div className="col-span-1">
                            Device Type
                        </div>
                        <div className="col-span-1">
                            <p className="">{type}</p>
                        </div>
                        <div className="col-span-1">
                            Description
                        </div>
                        <div className="col-span-1">
                            <p className="">{description}</p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                onClick={async () => {
                                    if (!resolved) {
                                        await resolveProblem({ id })
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