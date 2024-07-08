import Link from 'next/link'

const getPokemonsList = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100', {
      method: 'GET',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    return data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

const Page = async () => {
  const data = await getPokemonsList()

  return (
    <div className='w-full min-h-screen'>
      <h1 className='font-bold text-3xl'>Pokemons</h1>
      <ul className='w-full grid grid-cols-6'>
        {data.map((x, i) => {
          return (
            <li key={x.name} className=''>
              <Link href={`/pokemons/${i + 1}`}>{x.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Page
