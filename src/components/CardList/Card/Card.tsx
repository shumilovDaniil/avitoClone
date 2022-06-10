import React, {FC, useState} from 'react';
import {FiMoreHorizontal} from 'react-icons/fi';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import {ICard} from "../../../types/types";
import {CardImg} from "./CardImg/CardImg";
import {CardContent} from "./CardContent/CardContent";


const Card: FC<ICard> =
    ({title, price, img}) => {

        return (
            <div
                className="border-2 border-gray-400 rounded-xl "
                style={{flex: '0 1 30%'}}
            >
                <div>
                    <CardImg img={img}/>
                    <CardContent title={title} price={price}/>
                </div>
            </div>
        );
    }

export default Card;
