import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/images/logo'
import { Katalog } from './components/katalog'

export const Header = () => {
  return (
    <header className='top-0 sticky px-12 py-2 z-[10000] border-b-2 bg-white'>
      <div className="header-top flex items-center justify-end gap-12 text-black">
        <p>Доставка и оплата</p>
        <p>Пункты выдачи</p>
        <p>Поддержка</p>
        <a href="" className='font-semibold flex items-center justify-center gap-3'>
          <i className="fa-solid fa-phone"></i>
          <p className='text-blue-600'>+998 90 253 77 53</p>
        </a>
      </div>
      <div className="header-bottom pt-4 flex items-center justify-between gap-8">
        <Link to={`/`}> <Logo /> </Link>
        <Katalog />
        <div className="w-[50%] flex font-semibold text-black">
          <input className="w-full px-4 py-2 italic border-[1px] border-black bg-white text-black" type="search" placeholder="Поиск" />
        </div>
        <div className="pe-4 flex items-center justify-center gap-8 text-gray-800">
          <div className="cursor-pointer flex flex-col items-center justify-center">
            <i className="text-2xl fa-solid fa-user"></i>
            <p>Войти</p>
          </div>
          <Link to={`/likepage`}>
            <div className="cursor-pointer flex flex-col items-center justify-center">
              <i className="text-2xl fa-solid fa-heart"></i>
              <p>Избранное</p>
            </div>
          </Link>
          <Link to={`/shoppingcards`}>
            <div className="indicator cursor-pointer flex flex-col items-center justify-center">
              <span className="indicator-item badge px-1 font-semibold badge-secondary">13</span>
              <i className="text-2xl fa-solid fa-shopping-cart"></i>
              <p>Корзина</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
