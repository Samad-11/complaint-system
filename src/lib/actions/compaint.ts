'use server'

import { z } from "zod"
import prisma from "../prisma"
import { revalidatePath } from "next/cache"

const complaintScheme = z.object({
    complaintType: z.string().min(1, 'Complaint type is required'),
    description: z.string().min(10, "Description should have minimum 10 characters")
})

export async function addNewComplaint(_prevState: any, formdata: FormData) {
    const validation = complaintScheme.safeParse({
        complaintType: formdata.get("problemType") as string,
        description: formdata.get("description") as string,
    })

    if (validation.success) {
        const complaintType = formdata.get("problemType") as string
        const description = formdata.get("description") as string
        const userId = formdata.get("userId") as string

        const newComplaint = await prisma.complaints.create({
            data: {

                description,
                type: complaintType,
                user: { connect: { id: userId } }
            }
        })

        revalidatePath('/')
    } else {
        console.log(validation.error.issues);
        return {

            errors: validation.error.issues
        }
    }
}

export async function getUserComplaints(userId: string) {
    try {
        const userComplaints = await prisma.complaints.findMany({
            where: {
                userId
            },
            orderBy: {
                receivedDate: "desc"
            }
        })

        return {
            complaints: userComplaints
        }
    } catch (error) {
        console.log("Error getUserComplaints");

    }
}

export async function getAllComplaints(filter?: string) {
    console.log('====================================');
    console.log(filter);
    console.log('====================================');
    try {
        if (filter === 'resolved' || filter === "pending") {
            const complaints = await prisma.complaints.findMany({
                orderBy: { receivedDate: "desc" },
                where: {
                    resolved: (filter === "resolved" ? true : false)
                },
                include: {
                    user: true
                }
            })
            revalidatePath(`admin?complaints=${filter}`)
            return complaints
        }
        const complaints = await prisma.complaints.findMany({
            orderBy: {
                receivedDate: "desc"
            },
            include: {
                user: true
            }
        })
        revalidatePath('/admin')
        return complaints
    } catch (error) {
        console.log("error in getAllComplaints");
    }
}


export async function resolveProblem({ id }: { id: string }) {
    try {
        const resolved = await prisma.complaints.update({
            where: {
                id
            },
            data: {
                resolved: true,
                resolvedDate: new Date()
            }
        })
        revalidatePath('/')
    } catch (error) {

    }
}