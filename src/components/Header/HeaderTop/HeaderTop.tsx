import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const HeaderTop: FC = () => {
    return (
        <div className="headerTop   py-2 border-b-2 border-b-gray-100">
            <div className="container m-auto flex justify-between items-center">
                <ul className={"flex gap-6 text-gray-400 items-center"}>
                    <li><a href="#">Для бизнеса</a></li>
                    <li><a href="#">Магазины</a></li>
                    <li><a href="#">Помощь</a></li>
                </ul>
                <Link to={'/add-advert'} className={"text-cyan-400 font-medium"}>Разместить объявления</Link>
            </div>
        </div>
    );
};