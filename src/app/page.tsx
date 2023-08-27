import { signIn } from 'next-auth/react'

export default function Home() {
  function loginGithub() {
    signIn('github')
  }

  function loginGoogle() {
    signIn('google')
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-green-300">Book wise</h1>
      <div className="h-10 w-10 bg-gradient-horizontal"></div>
      <div className="mt-6 flex h-10 w-10 items-center justify-center bg-gradient-vertical"></div>
      <button onClick={loginGithub}>Connect with github</button>
      <button onClick={loginGoogle}>Connect with google</button>
    </>
  )
}
