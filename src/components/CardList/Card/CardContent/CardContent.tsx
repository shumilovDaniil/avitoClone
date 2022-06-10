import React, {FC, useState} from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {FiMoreHorizontal} from "react-icons/fi";


interface CardContentProps {
    title: string,
    price: number
}

export const CardContent: FC<CardContentProps> = ({title, price}) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="content py-4 px-4">
            <div className="contentTop flex justify-between">
                <a href="src/components/CardList/Card/Card">
                    <h4>{title}</h4>
                </a>
                {isLiked ? (
                    <button onClick={() => setIsLiked(!isLiked)}>
                        <FcLike className="text-2xl"/>
                    </button>
                ) : (
                    <button onClick={() => setIsLiked(!isLiked)}>
                        <FcLikePlaceholder className="text-2xl"/>
                    </button>
                )}
            </div>

            <div className="contentBottom flex justify-between">
                <div className="price flex gap-5 items-center ">
                    <strong className="text-2xl">
                        {price}
                        {' '}
                        ₽
                    </strong>
                </div>
                <button>
                    <FiMoreHorizontal/>
                </button>
            </div>


        </div>
    );
};