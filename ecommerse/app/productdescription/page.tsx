import React from 'react'
import Carouselimages from '../_components/carouselimages'
import Product_details from '../_components/product_details'

const page = () => {
  return (
    <div className='mt-32 px-40 flex justify-between'>
        <Carouselimages/>
        <Product_details/>
    </div>
  )
}

export default page