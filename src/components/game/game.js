import { useDispatch } from "react-redux";
import { useState } from 'react';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as actions from '../../actions';
import Card from '../card';
import LastPage from '../last-page';
import createCards from './cardList';
import uniqid from 'uniqid';
import './cardList'
import './game.css'

function Game() {
  const [startGameTime] = useState(new Date());
  const [cardsList, updateCardsList] = useState(createCards());
  const [clickCounter, setClickCounter] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setResultAndNavigate = (startGameTime, clickCounter) => {
    dispatch(actions.setGameResult(startGameTime, new Date(), clickCounter));
    navigate('/end');
  }

  const turnCards = (oldCardsList, id1, id2 = -1) => {
    return oldCardsList.map((card) => {
      return {
        ...card, endClassName: (card.id === id1 || card.id === id2) ? (card.endClassName === '' ? 'flipped' : '') : card.endClassName,
      }
    })
  }

  const endTurnCards = (oldCardsList) => {
    return oldCardsList.map((card) => {
      return {
        ...card, startClassName: card.endClassName,
      }
    })
  }

  const removeCards = (oldCardsList, id1, id2) => {
    return oldCardsList.filter(card => (card.id !== id1 && card.id !== id2))
  }

  const startFlipping = (id) => {
    let animatedCards = cardsList.filter((card) => (card.startClassName !== card.endClassName));
    if (animatedCards.length > 0) {
      return;
    }

    setClickCounter(clickCounter + 1);

    let flippedCards = cardsList.filter((card) => card.endClassName === 'flipped');
    if (flippedCards.length === 0){
      updateCardsList(turnCards(cardsList, id));
      return;
    }

    if (flippedCards[0].id !== id) {
      updateCardsList(turnCards(cardsList, id));
    }
  };

  const processFlippedCards = (id) => {
    updateCardsList(endTurnCards(cardsList));
    if (cardsList.length === 2) {
      setResultAndNavigate(startGameTime, clickCounter);
      return;
    }

    const flippedCards = cardsList.filter((card) => (card.endClassName === 'flipped' && card.id !== id));
    if (flippedCards.length > 0) {
      const selectedCard = cardsList.filter((card) => card.id === id)[0];
      const flippedCard = flippedCards[0];

      if (selectedCard.iconName === flippedCard.iconName) {
        updateCardsList(removeCards(cardsList, flippedCard.id, id));
      }
      else {
        updateCardsList(turnCards(cardsList, flippedCard.id, id));
      }
    }
  }

  function createRow(items) {
    return (
      <div>
        {items.map((item) => {
          return <Card key={uniqid()} card={item} onClick={startFlipping} onTransitionEnd={processFlippedCards} />
        })}
      </div>
    )
  }

  let rows = [];
  const numCol = 6;
  const numRows = 9;

  for (let i = 0; i < numRows; i++) {
    let startIndex = i * numCol + 1;
    let endIndex = startIndex + numCol - 1;
    let itemsForRow = cardsList.filter(item => item.id >= startIndex && item.id <= endIndex);
    rows.push(createRow(itemsForRow));
  }

  return (
    <div>
      <div className = "parent" >
        <div className = "gamePanel">
          {
            rows.map(row => (
              <span key={uniqid()}>{row}</span>))
          }
          <div><h1>Number of clicks: {clickCounter}</h1></div>
        </div>
        <Routes>
          <Route path='/end' element={<LastPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Game;
