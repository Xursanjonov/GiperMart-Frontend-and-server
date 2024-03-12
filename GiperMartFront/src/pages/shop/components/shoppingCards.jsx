import React from 'react'
import { useDispatch } from 'react-redux'
import { delet } from '../../../hooks/reducer/useAddCard'

export const ShoppingCards = ({ id, url, title, sprice, price }) => {
    try {
        const dispatch = useDispatch()
        const product = { id, url, title, sprice, price }
        const [count, setCount] = React.useState(1)
        const deleteCard = () => {
            dispatch(delet(product))
        }
        if (count == 0) {
            deleteCard()
        }

        return (
            <div className="w-[450px] h-[180px] px-4 overflow-hidden flex items-center gap-2 rounded-xl shadow-blue-500 shadow-md hover:shadow-pink-500 hover:shadow-lg bg-white text-blue-600">
                <figure className='w-full flex items-center justify-center'>
                    <img className='rounded-xl object-contain' src={url} alt="img" />
                </figure>
                <div className="w-full flex flex-col items-center justify-between gap-8">
                    <h5 className='w-full text-xl font-semibold'>{title}</h5>
                    <div className="w-full px-2 flex items-center justify-between">
                        <p className='font-semibold text-lg text-black'>{price}$</p>
                        <s className='font-semibold text-md text-gray-300'>{sprice}$</s>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center justify-center gap-4">
                            <button onClick={() => setCount(count - 1)} className='px-1.5 bg-gray-500 font-bold rounded-md text-white'> - </button>
                            <h1 className='w-[2rem] text-xl font-extrabold text-black'>{count}</h1>
                            <button onClick={() => setCount(count + 1)} className='px-1.5 bg-green-500 font-bold rounded-md text-white'> + </button>
                        </div>
                        <button onClick={() => deleteCard()} className='px-2 py-1 bg-red-500 rounded-md text-white'> <i className=" text-xl fa-solid fa-trash-can"></i> </button>
                    </div>
                </div>
            </div>
        )
    } catch (e) { console.log(e); }
}
