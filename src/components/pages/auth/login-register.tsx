'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'

const registerSchema = z.object({
  name: z.string().min(3, 'Full name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password is required')
})

export default function CustomerAuthForm() {
  const [tab, setTab] = useState<'register' | 'login'>('register')
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-20">
      <div className="flex justify-center mb-6">
        <Image
          src={isDark ? "/logo/logo-viyaga-bold-light.svg" : "/logo/logo-viyaga-bold.svg"}
          alt="Viyaga logo"
          width={160}
          height={45}
        />
      </div>

      <div className="flex justify-center mb-4 border-b border-gray-300 dark:border-gray-700">
        <button
          onClick={() => setTab('register')}
          className={`py-2 px-4 text-sm font-semibold ${
            tab === 'register'
              ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setTab('login')}
          className={`py-2 px-4 text-sm font-semibold ${
            tab === 'login'
              ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          Login
        </button>
      </div>

      {tab === 'register' ? <RegisterForm /> : <LoginForm />}
    </div>
  )
}

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: any) => {
    try {
      await axios.post('/api/users', {
        email: data.email,
        password: data.password,
        name: data.name,
        phone: data.phone,
      })
      toast.success("Registration successful! You can now log in.")
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField label="Full Name" id="name" type="text" error={errors.name?.message} {...register('name')} />
      <InputField label="Email" id="email" type="email" error={errors.email?.message} {...register('email')} />
      <InputField label="Phone" id="phone" type="tel" error={errors.phone?.message} {...register('phone')} />
      <InputField label="Password" id="password" type="password" error={errors.password?.message} {...register('password')} />
      <InputField label="Confirm Password" id="confirmPassword" type="password" error={errors.confirmPassword?.message} {...register('confirmPassword')} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm"
      >
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  )
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post('/api/users/login', {
        email: data.email,
        password: data.password,
      })

      if (res.status === 200) {
        toast.success('Login successful')
        window.location.href = '/dashboard'
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Invalid credentials')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField label="Email" id="email" type="email" error={errors.email?.message} {...register('email')} />
      <InputField label="Password" id="password" type="password" error={errors.password?.message} {...register('password')} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm"
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}

// Generic Input Field component
const InputField = ({ label, id, type, error, ...props }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
      {label}
    </label>
    <input
      id={id}
      type={type}
      {...props}
      className={`w-full p-2.5 text-sm border rounded-lg bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
        error ? 'border-red-500' : ''
      }`}
    />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
)
