import Image from 'next/image'
import AuthenticationForm from '@/components/auth/login'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full justify-center items-center bg-black">
      <Logo />
      <AuthenticationForm />
    </main>
  )
}

function Logo() {
  return (
    <div>
      <Image
        src="/logo/image.png"
        alt="Logo"
        width={364}
        height={364}
        priority={true}
      />
    </div>
  )
}

function Login() {
  return (
    <div>
      <button>Login</button>
    </div>
  )
}
