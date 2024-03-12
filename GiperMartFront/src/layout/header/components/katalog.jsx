import React from 'react'
import { useGetCategory } from '../../../pages/home/service/query/useGetCategory'
import { CategoryCardsModal } from './categoryCardsmodal'

export const Katalog = () => {
  const { data } = useGetCategory()
  const katalogModal = () => {
    document.getElementById('my_modal_4').showModal()
    setIcon(false)
  }

  return (
    <>
      <button className="btn px-5 py-2 flex items-center justify-center gap-4 text-2xl border-0 rounded-none font-bold text-white bg-blue-400 hover:bg-green-400"
        onClick={() => katalogModal()}>
        <i className={`text-xl font-extrabold fa-solid fa-bars`}></i>
        Каталог
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-middle w-[77%] py-8 rounded-3xl bg-white">
          <div className="flex flex-wrap items-center justify-center gap-4 ">
            {
              data?.map(item => (
                <CategoryCardsModal key={item.id} {...item} />
              ))
            }
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
