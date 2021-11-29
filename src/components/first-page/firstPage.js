import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Game from '../game';
import * as actions from '../../actions';
import './firstPage.css';


const FirstPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.incGameNumber());
    navigate('game');
  }

  return (
    <div className="parent">
      <div className="centered">
        <button variant="outlined" onClick={handleClick}>Start Game</button>
      </div>
      <Routes>
        <Route path='game' element={<Game />} />
      </Routes>
    </div>
  )
}

export default FirstPage;