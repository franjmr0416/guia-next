import Image from 'next/image'
import Link from 'next/link'
const getPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      method: 'GET',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    return data
  } catch (error) {
    return { error: error }
  }
}
const Page = async ({ params }) => {
  const id = params.id
  const pokemon = await getPokemon(id)
  return (
    <div className='w-full h-screen'>
      <Link className='px-8 py-2' href={'/pokemons'}>
        Volver
      </Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} width={300} height={300} />
    </div>
  )
}

export default Page
