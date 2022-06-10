import React, {FC} from 'react';
import Title from "../ui/Title";
import {cards} from "../../database";
import CardList from "../CardList";

export const Main: FC = () => {
    return (
        <div className="container m-auto pt-8">
            <Title subtitle={"Посмотреть всё"}>Рекомендации для вас</Title>

            <CardList cards={cards}/>

            <Title subtitle={"Перейти в каталог"}>Популярные категории</Title>

            <Title subtitle={"Посмотреть всё"}>Акции</Title>
        </div>
    );
};