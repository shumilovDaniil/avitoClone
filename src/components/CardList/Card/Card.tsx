import React, {FC, useState} from 'react';
import {FiMoreHorizontal} from 'react-icons/fi';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import {ICard} from "../../types/types";
import title from "../ui/Title";


const Card: FC<ICard> =
    ({title, price, img}) => {
        const [isLiked, setIsLiked] = useState(false);

        return (
            <div
                className="border-2 border-gray-400 rounded-xl "
                style={{flex: '0 1 30%'}}
            >
                <div className="">
                    <a href="src/components/CardList/Card">
                        <img
                            className="rounded-xl object-cover w-full h-56"
                            src={img}
                            alt=""
                            // style={{height: 230, width: '100%'}}
                        />
                    </a>
                    <div className="content py-4 px-4">


                        <div className="contentTop flex justify-between">
                            <a href="src/components/CardList/Card">
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
                </div>
            </div>
        );
    }

export default Card;
