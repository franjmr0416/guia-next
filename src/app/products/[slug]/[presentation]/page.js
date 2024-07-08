import React from 'react'

const Product = ({ params }) => {
  console.log(params)
  return (
    <div className='w-full h-screen'>
      <h1>
        Product slug: {params.slug}, presentation: {params.presentation}
      </h1>
    </div>
  )
}

export default Product
