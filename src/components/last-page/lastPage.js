import React from 'react';
import { Link, } from 'react-router-dom';
import { useSelector } from "react-redux";

const LastPage = () => {
    const startTime = useSelector(state => state.startTime);
    const endTime = useSelector(state => state.endTime);
    const counter = useSelector(state => state.clickCount);
    const gameNumber = useSelector(  state => state.gameNumber );

    let startGame = '';
    let endGame = '';

    if (startTime !== undefined && startTime.toLocaleTimeString)
        startGame = startTime.toLocaleTimeString();

    if (endTime !== undefined && endTime.toLocaleTimeString)
        endGame = endTime.toLocaleTimeString();

    let elapsedTime = 0
    if (startTime !== undefined && endTime !== undefined)
        elapsedTime = Math.round((endTime - startTime) / 1000);

    return (
        <div className='results'>
            <h1>Game Over</h1>
            <p>Game Number: {gameNumber}</p>
            <p>Time Started: {startGame}</p>
            <p>Time Finished: {endGame} </p>
            <p>Elapsed Time (s): {elapsedTime} </p>
            <p>Number of clicks: {counter}</p>
            <Link to='/'>
                <p>Start New Game</p>
            </Link>
        </div>
    )
}

export default LastPage;