import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const HeaderBottom: FC = () => {
    return (
        <div className="bottom mb-7">
            <div className="container m-auto  flex justify-between items-center">
                <div className="leftBlock flex items-center gap-24">
                    <Link to={'/'} className="logo" >
                        <img
                            className={" h-16 object-cover"}
                            src="./images/Avito_logo.png"
                            alt=""
                        />
                    </Link>
                    <div className="searchBlock">
                        <button
                            className={
                                "px-8 py-2.5 bg-blue-500 text-white rounded-lg mr-5"
                            }
                        >
                            Каталог
                        </button>
                        <select
                            className={"border-gray-300 border-2 p-2 rounded-l-lg"}
                            name=""
                            id=""
                        >
                            <option value="">Любая категория</option>
                            <option value="">Категория 2</option>
                        </select>
                        <input
                            className={"p-2 px-4 border-gray-300 border-2"}
                            type="search"
                            placeholder={"Поиск"}
                        />
                        <button
                            className={
                                "p-2 px-4 border-gray-300 border-2 rounded-r-lg px-10"
                            }
                        >
                            Найти
                        </button>
                    </div>
                </div>
                <ul className="actionBlock flex gap-5">
                    <li>
                        <a className="enter" href={"#"}>
                            Войти
                        </a>
                    </li>
                    <li>
                        <a className="enter" href={"#"}>
                            Избранное
                        </a>
                    </li>
                    <li>
                        <a className="enter" href={"#"}>
                            Заказы
                        </a>
                    </li>
                    <li>
                        <a className="enter" href={"#"}>
                            Корзина
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};