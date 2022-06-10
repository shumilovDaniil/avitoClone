import React, {FC} from 'react';
import Card from './Card';
import {ICard} from "../types/types";


export interface ICardListProps {
  cards: ICard[]
}

const CardList: FC<ICardListProps> = ({cards}) => {
  return (
    <div className="flex  gap-5" style={{ marginBottom: 25 }}>
      {cards.map((card) => <Card key={card.id} {...card} />)}
    </div>
  );
}

export default CardList;
