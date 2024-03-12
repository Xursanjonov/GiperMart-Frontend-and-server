import React from 'react'
import { useGetTel } from '../service/query/useGetTel'
import { useGetLaptop } from '../service/query/useGetLaptop'
import { useDispatch } from 'react-redux'
import { add } from '../../../hooks/reducer/useAddCard'

export const HomePhonesCard = ({ id, url, price, sprice, title }) => {
    const dispatch = useDispatch()
    const addCards = () => {
        dispatch(add({ id, url, title, price, sprice }))
    }

    return (
        <div className='ps-4 flex flex-col items-start rounded-xl bg-white shadow-md hover:shadow-lg hover:shadow-blue-600 text-black'>
            <figure className='mx-auto relative'>
                <i className="absolute top-4 font-light right-[-1.5rem] text-lg fa-solid fa-heart"></i>
                <img className='h-[160px]' src={url} alt="" />
            </figure>
            <div className="w-full pe-4 pt-2 py-3 flex flex-col items-start justify-start gap-2">
                <h5>{title}</h5>
                <p className='w-full font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <s className='ms-2 text-lg font-semibold text-gray-400'>{sprice}$</s>
                <div onClick={() => addCards()} className="w-full flex items-center justify-between text-white">
                    <p className='ms-2 text-lg font-bold text-black'>{price}$</p>
                    <button className='py-1 px-1.5 rounded-sm bg-blue-400'> <i className="text-md fa-solid fa-shopping-cart"></i> </button>
                </div>
            </div>
        </div>
    )
}

export const HomeCompont = () => {
    const { data } = useGetTel()

    return (
        <>
            <div className="w-full h-[60vh] flex items-center justify-start gap-4">
                {data?.slice(0, 6).map((item) => (
                    <HomePhonesCard key={item.id} {...item} />
                ))}
            </div>
        </>
    )
}

//=============================================================================== Laptops components =================================================================
export const HomeLaptopCardcompont = ({ url, price, sprice, title }) => {
    return (
        <div className='w-[380px] ps-4 flex flex-col items-start rounded-xl bg-white hover:shadow-lg hover:shadow-blue-600 text-black'>
            <figure className='mx-auto relative bg-white'>
                <i className="absolute top-4 font-light right-[-1rem] text-lg fa-solid fa-heart"></i>
                <img className='h-[160px]' src={url} alt="" />
            </figure>
            <div className="w-full pe-4 pt-2 py-3 flex flex-col items-start justify-start gap-2">
                <h5>{title}</h5>
                <p className='w-full font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <s className='ms-2 text-lg font-semibold text-gray-400'>{sprice}$</s>
                <div className="w-full flex items-center justify-between">
                    <p className='ms-2 text-lg font-bold'>{price}$</p>
                    <button className='py-1 px-1.5 rounded-sm text-white bg-blue-400'> <i className="text-md fa-solid fa-shopping-cart"></i> </button>
                </div>
            </div>
        </div>
    )
}

export const HomeLaptopCards = () => {
    const { data: laptop } = useGetLaptop()

    return (
        <div className="w-full h-[60vh] flex items-center justify-start gap-4">
            {laptop?.slice(0, 5).map((item) => (
                <HomeLaptopCardcompont key={item.id} {...item} />
            ))}
        </div>
    )
}

