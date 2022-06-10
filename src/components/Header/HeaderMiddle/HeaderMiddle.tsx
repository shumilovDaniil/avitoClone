import React, {FC} from 'react';
import {MdPlace} from "react-icons/md";

export const HeaderMiddle: FC = () => {
    return (
        <div className="headerMenu border-b-2  border-b-gray-100">
            <div className="top py-4">
                <div className="container m-auto flex ">
                    <div className="place  flex text-gray-400 mr-14">
                        <MdPlace className={'text-2xl mr-2'}/>
                        Тобольск мкр. Защитино
                    </div>
                    <ul className={'flex gap-6 text-gray-700 items-center flex-wrap'}>
                        <li><a className={'px-2 py-1 bg-violet-500 text-white rounded-xl'}
                               href="#">Онлайн-магазин</a></li>
                        <li><a className={'py-2'} href="#">Транспорт</a></li>
                        <li><a className={'py-2'} href="#">Недвижимость</a></li>
                        <li><a className={'py-2'} href="#">Работа</a></li>
                        <li><a className={'py-2'} href="#">Услуги</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};