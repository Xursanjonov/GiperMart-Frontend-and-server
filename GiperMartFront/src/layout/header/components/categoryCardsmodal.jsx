import React from 'react'

export const CategoryCardsModal = ({ img, name, p1, p2, p3, p4 }) => {
    return (
        <div className="w-[350px] flex flex-col justify-center gap-2 shadow-md shadow-blue-500 hover:shadow-pink-500 bg-gray-50">
            <div className="w-[350px] h-[180px] px-4 py-2 flex items-center justify-center gap-4 bg-gray-100">
                <figure> <img className='object-contain' src={img} alt="" /> </figure>
                <p className='text-lg font-semibold text-black'> {name} </p>
            </div>
            <div className="px-6 pb-4 font-semibold text-md text-black">
                <p className='cursor-pointer'>{p1}</p>
                <p className='cursor-pointer'>{p2}</p>
                <p className='cursor-pointer'>{p3}</p>
                <p className='cursor-pointer text-red-500'>{p4}</p>
            </div>
        </div>
    )
}
