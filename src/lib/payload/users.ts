'use server'

import { logout } from '@payloadcms/next/auth'
import config from '@payload-config'

export async function logoutAction() {
    try {
        return await logout({ config })
    } catch (error) {
        return { error: `Logout failed: ${error instanceof Error ? error.message : 'Unknown error'}` }
    }
}