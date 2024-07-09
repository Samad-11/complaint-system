"use server"

import { z } from "zod"
import validator from "validator"
import { redirect } from "next/navigation";
import prisma from "../prisma";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secret = 'secret'

const key = new TextEncoder().encode(secret);

export async function encrypt(payload: any) {

    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10 minutes from now")
        .sign(key)
}

export async function decrypt(input: string) {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"]
    })
    return payload;
}




const registerSchema = z.object({
    name: z.string().min(3, "Name should have minimum 3 characters"),
    email: z.string().email().min(1, "Email cannot be blank"),
    phone: z.string().refine(validator.isMobilePhone, "Not a valid phone number"),
    address: z.string().min(1, "Address field cannot be empty "),
    password: z.string().min(4, "Password should have minimum 4 characters")
});

const loginSchema = z.object({
    email: z.string().email().min(1, "Email is required"),
    password: z.string().min(1, "Password is required")
})

export async function register(_prevState: any, formdata: FormData) {

    const validation = registerSchema.safeParse({
        name: formdata.get('name') as string,
        email: formdata.get('email') as string,
        phone: formdata.get('phone') as string,
        address: formdata.get('address') as string,
        password: formdata.get('password') as string,
    })

    if (validation.success) {
        const name = formdata.get('name') as string
        const email = formdata.get('email') as string
        const phone = formdata.get('phone') as string
        const address = formdata.get('address') as string
        const userPassword = formdata.get('password') as string
        const isMailOrPhoneExist = await prisma.user.findMany({
            where: {
                OR: [
                    {
                        email
                    },
                    {
                        phone
                    }
                ]
            }
        })
        if (isMailOrPhoneExist[0]) {
            return { message: "Mail or Phone exists" }
        }

        const user = await prisma.user.create({
            data: {
                email, name, password: userPassword, phone, address
            }
        })
        if (!user) {
            return { message: "Unknown Error found" }
        }
        const { password, ...userWithoutPassword } = user;

        const expires = new Date(Date.now() + 10 * 60 * 1000)
        const session = await encrypt({ userWithoutPassword, expires })
        cookies().set("session", session, { expires, httpOnly: true })
        redirect('/')
    } else {

        return { errors: validation.error?.issues }
    }
}

export async function login(_prevState: any, formdata: FormData) {
    const validation = loginSchema.safeParse({
        email: formdata.get('email') as string,
        password: formdata.get("password") as string
    })

    if (validation.success) {
        const email = formdata.get('email') as string
        const userPassword = formdata.get("password") as string

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            return { message: "User Not Found !" }

        } else {

            if (user.password !== userPassword) {
                return { message: "Incorrect Password" }
            }
            const { password, ...userWithoutPassword } = user
            const expires = new Date(Date.now() + 10 * 60 * 1000)
            const session = await encrypt({ userWithoutPassword, expires })
            cookies().set("session", session, { expires, httpOnly: true })

            redirect('/')
        }
    } else {
        console.log('zod error')
        return {
            errors: validation.error.issues
        }
    }
}

export async function logout() {
    // Destroy the session by clearing the session cookie
    console.log('inside logout');

    cookies().set("session", "", { expires: Date.now() - 24 * 60 * 60 * 1000 });
}

export async function getSession() {
    const session = cookies().get('session')?.value
    if (!session) {
        return null
    }
    return await decrypt(session)
}