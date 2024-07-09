"use client"
import { useState } from 'react'
import { MdOutlineVpnKey } from 'react-icons/md'
import { PiEyeClosedLight, PiEyeLight } from 'react-icons/pi'

const PasswordField = () => {

    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <label className="input input-bordered  flex items-center gap-2 rounded-full  bg-transparent max-sm:backdrop-blur-sm">
            <input name='password' type={passwordVisible ? "text" : "password"} className="grow" placeholder="Password" />

            <PiEyeClosedLight onClick={() => setPasswordVisible(true)} className={`${(passwordVisible === true) && "hidden"}`} />
            <PiEyeLight onClick={() => setPasswordVisible(false)} className={`${(passwordVisible === false) && "hidden"}`} />
            <MdOutlineVpnKey />
        </label>
    )
}

export default PasswordField