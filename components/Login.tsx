'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className="bg-[#202202] h-screen flex flex-col items-center justify-center">
      <Image
        src="https://www.jonchristie.net/favicon.png"
        width={200}
        height={200}
        alt="Jon's ChatGPT Messenger"
      />
      <button onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/' })}
      className="text-3xl font-bold text-white animate-pulse">Sign In</button>

    </div>
  )
}

export default Login