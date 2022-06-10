import React, { FC, useState } from "react";
import Title from "../ui/Title";
import CardList from "../CardList/CardList";
import { Button, Form, Modal } from "react-bootstrap";
import { MyForm } from "../MyForm/MyForm";
import { ICard } from "../../types/types";

interface MainProps {
  cards: ICard[];
  createCard: (card: ICard) => void;
}

export const Main: FC<MainProps> = ({ cards, createCard }) => {
  return (
    <>
      <Title subtitle={"Посмотреть всё"}>Рекомендации для вас</Title>
      <CardList cards={cards} />
      <Title subtitle={"Перейти в каталог"}>Популярные категории</Title>
      <Title subtitle={"Посмотреть всё"}>Акции</Title>

      <MyForm createCard={createCard} />
    </>
  );
};
