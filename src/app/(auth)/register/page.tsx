import React from 'react'
import bg from '../../../../public/assets/images/bg-Images/b2.jpg'
import Form from './Form'

const RegisterPage = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-sm sm:min-w-[33rem] sm:px-6 py-7 sm:border rounded-lg sm:backdrop-blur-sm">
                        <h1 className="mb-8 text-5xl font-bold">Registration</h1>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage