import React from 'react'

export const AksiyaBanner = ({ img }) => {
    return (
        <div className='w-[450px] mx-auto'>
            <figure className='w-[450px] mx-auto'>
                <img className='object-contain' src={img} alt="img" />
            </figure>
        </div>
    )
}
