import React, { useState } from "react";
import { items } from "./database";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ICard } from "./types/types";

const App = () => {
  const [cards, setCards] = useState(items);

  function createCard(card: ICard) {
    setCards((prev) => [...prev, card]);
  }

  return (
    <div className={"container m-auto pt-8"}>
      <Header />

      <Routes>
        <Route
          path={"/"}
          element={<Main cards={cards} createCard={createCard} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
