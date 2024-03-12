import React from 'react'
import { Sliders } from './components/sliderCard'
import { nanoid } from 'nanoid';
import { CategoryCards } from './components/categoryCards';
import { useGetCategory } from './service/query/useGetCategory';
import { ThreeCompont } from './components/threeProductCard';
import { HomeCompont, HomeLaptopCards } from './components/homePhonesCard';
import { AksiyaBanner } from './components/aksiyaBanner';
import { useGetAksiya } from './service/query/useGetAksiya'
import { BrendCompont } from './components/brends'

export const Home = () => {
  const { data } = useGetCategory()
  const { data: aksiya } = useGetAksiya()

  try {
    return (
      <section className='w-full bg-white'>
        <Sliders key={nanoid()} />
        <div className="px-12 py-12 flex items-center justify-center gap-8">
          {data?.map((item) => (
            <CategoryCards {...item} key={item.id} />
          ))}
        </div>
        <div className="px-8 py-4 bg-white">
          <h1 className='mb-3 text-2xl font-bold text-black'>Смартфоны и планшеты</h1>
          <HomeCompont />
        </div>
        <div className="flex py-8 px-16 mb-5 flex-col items-start justify-center bg-blue-200">
          <h1 className='mb-6 text-3xl font-bold text-black'>Акции</h1>
          <div className="flex items-center justify-center gap-12">
            {aksiya?.map((item) => (
              <AksiyaBanner key={item.id} {...item} />
            ))}
          </div>
        </div>
        <ThreeCompont />
        <div className="px-8 py-4 bg-white">
          <h1 className='mb-3 text-2xl font-bold text-black'>Смартфоны и планшеты</h1>
          <HomeCompont />
        </div>
        <div className="px-8 py-4 bg-white">
          <h1 className='mb-3 text-2xl font-bold text-black'>Ноутбуки, планшеты и компьютеры</h1>
          <HomeLaptopCards />
        </div>
        <BrendCompont/>
      </section>
    )
  } catch (e) { console.log(e); }
}
