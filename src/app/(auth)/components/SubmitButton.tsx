"use client"

import { cn } from "@/utils/cn"
import { ClassValue } from "clsx"
import { useFormStatus } from "react-dom"

const SubmitButton = ({ className, buttonText }: { className?: ClassValue, buttonText?: string }) => {
    const { pending } = useFormStatus()
    const text = buttonText || "Submit"
    return (
        <button
            disabled={pending}
            className={cn("btn mx-auto w-full rounded-full bg-white text-black hover:bg-transparent hover:border-white hover:text-white", className)}>
            {pending ? <span className="loading loading-dots loading-sm"></span> : text}
        </button>
    )
}

export default SubmitButton