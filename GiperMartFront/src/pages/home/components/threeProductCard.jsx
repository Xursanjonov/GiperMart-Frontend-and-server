import React from 'react'
import { useGetTel } from '../service/query/useGetTel';
import { useGetLaptop } from '../service/query/useGetLaptop';

export const ThreeProductCard = ({ url, price, sprice, title }) => {
    try {
        return (
            <div className="w-[450px] h-[180px] my-6 flex items-center justify-evenly text-black">
                <div className="w-[450px] h-[180px] px-4 overflow-hidden flex items-center gap-2 rounded-xl shadow-blue-500 shadow-md hover:shadow-pink-500 hover:shadow-lg">
                    <figure className='w-full flex items-center justify-center'>
                        <img className='rounded-xl object-contain' src={url ? url : "https://gipermart-images.netlify.app/Phones/phone1.png"} alt="img" />
                    </figure>
                    <div className="w-full flex flex-col items-center justify-between gap-8">
                        <h5 className='w-full text-xl font-semibold'>{title}</h5>
                        <div className="w-full px-2 flex items-center justify-between">
                            <p className='font-semibold text-lg text-black'>{price}$</p>
                            <s className='font-semibold text-md text-gray-300'>{sprice}$</s>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (e) { console.log(e); }
}

export const ThreeCompont = () => {
    const { data: tel } = useGetTel()
    const { data: laptop } = useGetLaptop()

    return (
        <div className="w-full py-8 flex items-center justify-center gap-6">
            <div className="flex flex-col text-black">
                <h1 className='mb-4 text-2xl font-semibold'>Смартфоны и планшеты</h1>
                <hr />
                <div className="flex flex-col items-center justify-center">
                    {tel?.slice(0, 3).map(item=> (
                    <ThreeProductCard key={item.id} {...item} />
                ))}
                </div>
            </div>
            <div className="flex flex-col text-black">
                <h1 className='mb-4 text-2xl font-semibold'>Ноутбуки, планшеты и компьютеры</h1>
                <hr />
                <div className="flex flex-col items-center justify-center">
                    {laptop?.slice(0, 3).map(item => (
                    <ThreeProductCard key={item.id} {...item} />
                ))}
                </div>
            </div>
            <div className="flex flex-col text-black">
                <h1 className='mb-4 text-2xl font-semibold'>Смартфоны и планшеты</h1>
                <hr />
                <div className="flex flex-col items-center justify-center">
                    {tel?.slice(0, 3).map(item => (
                    <ThreeProductCard key={item.id} {...item} />
                ))}
                </div>
            </div>
        </div>
    )
}
