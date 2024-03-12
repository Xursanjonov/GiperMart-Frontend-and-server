import React from 'react'
import { Logo } from '../../assets/images/logo'
import { Link } from 'react-router-dom'
import humo from '../../assets/images/humo.png'
import uzcard from '../../assets/images/uzcard.png'
import payme from '../../assets/images/payme.png'

export const Footer = () => {
  return (
    <footer>
    <div className='w-full footer-top py-12 px-12 flex items-start justify-start gap-28 bg-gray-100 text-black'>
      <div className="footer-start flex flex-col items-start gap-1">
        <div className="px-4">
          <Link to={'/'}> <Logo /> </Link>
        </div>
        <h5 className='text-xl font-bold'>+99 893 374-66-44</h5>
        <p>справочная служба</p>
        <h5 className='text-xl font-bold'>+99 890 253-77-53</h5>
        <p>интернет-магазин</p>
        <h4 className='text-xl font-bold'>Оставайтесь на связи</h4>
        <div className="footer-icons flex items-center justify-start gap-3">
          facebook
          ok
          uk
          youtube
          instagram
        </div>
      </div>
      <div className="footer-center-1 flex flex-col items-start justify-center gap-3">
        <p>Условия обмена и возврата</p>
        <p>Каталог</p>
        <p>O компании</p>
        <p>Контакты</p>
        <p>Доставка</p>
        <p>Оплата</p>
      </div>
      <div className="footer-center-2 flex flex-col items-start justify-center gap-3">
        <p>Клиентам</p>
        <p>Личный кабинет</p>
        <p>Блог</p>
        <p>Обратная связь</p>
      </div>
      <div className="footer-top flex flex-col items-start justify-center gap-3">
        <p>Информация</p>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности и оферта</p>
      </div>
    </div>
      <div className="w-full footer-bottom px-12 py-3 flex items-center justify-between text-black bg-gray-200">
        <p>© 2022 Любое использование контента без письменного разрешения запрещено</p>
        <div className="flex items-center justify-center gap-4">
          <img className='cursor-pointer' src={payme} alt="" />
          <img className='cursor-pointer' src={uzcard} alt="" />
          <img className='cursor-pointer' src={humo} alt="" />
        </div>
      </div>
    </footer>
  )
}
