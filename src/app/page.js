import Image from 'next/image'
import Coffe from '../../public/bigimg.jpg'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <h1>Home</h1>
      <Image src={Coffe} width={5472} height={3648} placeholder='blur' />
    </main>
  )
}
