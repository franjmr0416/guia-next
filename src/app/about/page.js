import Link from 'next/link'

const About = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1>About</h1>
      <Link href={'/'}>Home</Link>
    </div>
  )
}
export default About
