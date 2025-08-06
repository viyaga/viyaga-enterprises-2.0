'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AuthForm() {
  const [tab, setTab] = useState<'register' | 'login'>('register')

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-6">
        <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" width={32} height={32} />
        <span className="ml-2 text-2xl font-semibold text-gray-900 dark:text-white">Affiliate Portal</span>
      </div>

      <div className="mb-4 flex justify-between border-b border-gray-200 dark:border-gray-600">
        <button
          onClick={() => setTab('register')}
          className={`py-2 px-4 font-medium text-sm ${
            tab === 'register'
              ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400'
              : 'text-gray-500 hover:text-blue-600 dark:text-gray-400'
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setTab('login')}
          className={`py-2 px-4 font-medium text-sm ${
            tab === 'login'
              ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400'
              : 'text-gray-500 hover:text-blue-600 dark:text-gray-400'
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
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="registerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          id="registerEmail"
          className="w-full p-2.5 text-sm border rounded-lg bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="registerPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          id="registerPassword"
          className="w-full p-2.5 text-sm border rounded-lg bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="••••••••"
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirm password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full p-2.5 text-sm border rounded-lg bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="flex items-start">
        <input
          id="terms"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
          required
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-500 dark:text-gray-300">
          I agree to the{' '}
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-5 py-2.5"
      >
        Create account
      </button>
    </form>
  )
}

function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          id="loginEmail"
          className="w-full p-2.5 text-sm border rounded-lg bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="loginPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          id="loginPassword"
          className="w-full p-2.5 text-sm border rounded-lg bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="flex justify-between text-sm">
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-5 py-2.5"
      >
        Login
      </button>
    </form>
  )
}