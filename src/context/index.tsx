import React, { ReactNode } from 'react'
import { AuthProvider } from './auth-context'
import { getMe } from '@/lib/payload/users'

const Context = async ({ children }: { children: ReactNode }) => {
    const user = await getMe()

    return (
        <AuthProvider initialUser={user}>{children}</AuthProvider >
    )
}

export default Context