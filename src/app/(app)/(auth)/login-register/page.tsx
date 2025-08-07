import CustomerAuthForm from '@/components/pages/auth/login-register'
import { getMe } from '@/lib/payload/users'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
    const res = await getMe()
    if(res?.user) redirect('/dashboard')
        
    return (
        <CustomerAuthForm />
    )
}

export default page