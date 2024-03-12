import { Link } from 'react-router-dom'
import { useGetBrends } from '../service/query/useGetBrends'

export const Brends = ({ img }) => {
    return (
        <Link to={``}>
            <figure className='w-[180px] h-[4rem] flex items-center justify-center bg-white shadow-sm shadow-gray-500'>
                <img className='object-contain' src={img} alt="" />
            </figure>
        </Link>
    )
}

import React from 'react'

export const BrendCompont = () => {
    const { data: brends } = useGetBrends()

    return (
        <div className="px-14 py-4 bg-white">
            <h1 className='mb-3 text-2xl font-bold text-black'>Популярные бренды</h1>
            <div className="my-8 flex flex-wrap items-center justify-start gap-6">
                {brends?.map(item => (
                    <Brends key={item.id} img={item.url} />
                ))}
            </div>
        </div>
    )
}
