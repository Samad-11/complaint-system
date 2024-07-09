import React from 'react'

const ErrorMessages = ({ errors }: { errors: string[] }) => {
    if (!errors) {
        return null
    }
    if (errors.length === 0) {
        return null
    }
    const text = errors.join(", ")
    return (
        <div>
            {
                text
            }
        </div>
    )
}

export default ErrorMessages