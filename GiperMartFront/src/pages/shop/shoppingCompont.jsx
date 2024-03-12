import React from 'react'
import { getStorage } from '../../lib/storage'
import { ShoppingCards } from './components/shoppingCards';
import { nanoid } from '@reduxjs/toolkit';

export const ShoppingCompont = () => {
  const localCards = getStorage('products');

  return (
    <section className=' bg-white'>
      <h1 className='py-4 text-3xl text-center font-bold text-black'>Shopping Pages</h1>

      <div key={nanoid()} className="w-full py-8 ps-6 grid grid-cols-3 items-center justify-start gap-8 bg-white">
        {
          localCards?.map(product => (
            <ShoppingCards key={product.id} {...product} />
          ))
        }
      </div>
    </section>
  )
}
