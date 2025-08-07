import { redirect } from 'next/navigation'

const BeforeLogin = async () => {
  redirect('/login-register')
  return null
}

export default BeforeLogin