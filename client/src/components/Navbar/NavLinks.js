import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                О нас
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Услуги
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Portfolio
            </HashLink> */}
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Контакты
            </HashLink>
            {/* <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink> */}
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/register">
                Регистрация
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/login">
                Логин
            </HashLink>
        </>
    )
}

export default NavLinks;
