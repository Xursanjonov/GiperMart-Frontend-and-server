import React from 'react'

export const CategoryCards = ({img, name}) => {
  try {
    return (
        <div className="w-[500px] h-[150px] px-4 py-2 flex items-center justify-center gap-4 bg-gray-100">
            <figure> <img className='object-contain' src={img} alt="" /> </figure>
            <p className='text-xl font-semibold text-black'> {name} </p>
        </div>
    )
  } catch (e) {console.log(e);}
}
