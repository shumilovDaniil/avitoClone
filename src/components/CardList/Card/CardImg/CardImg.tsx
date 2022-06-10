import React, {FC} from 'react';
import {ICard} from "../../../types/types";

interface CardImgProps {
    img: string | undefined
}

export const CardImg: FC<CardImgProps> = ({img}) => {
    return (
        <a href="src/components/CardList/Card/Card">
            <img
                className="rounded-xl object-cover w-full h-56"
                src={(typeof img === "undefined") ? 'https://www.hot-motor.ru/body/clothes/images/no_icon.png' : img}
                alt=""
            />
        </a>
    );
};