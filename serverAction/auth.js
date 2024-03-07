'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export async function whoAmI() {
    const session = getServerSession(authOptions)
    return session
}