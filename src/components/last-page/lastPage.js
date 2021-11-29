import React from 'react';
import { Link, } from 'react-router-dom';
import { useSelector } from "react-redux";

const LastPage = () => {
    const startTime = useSelector(state => state.startTime);
    const endTime = useSelector(state => state.endTime);
    const counter = useSelector(state => state.clickCounter);
    const gameNumber = useSelector(  state => state.gameNumber );

/**
 * Look at the Optional Chaining operator as well as the Nullish Coalescing operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
*/
    const startGame = new Date(startTime);
    const endGame = new Date(endTime);


    const elapsedTime = Math.round((endTime - startTime) / 1000);

    return (
        <div className='results'>
            <h1>Game Over</h1>
            <p>Game Number: {gameNumber}</p>
            <p>Time Started: {startGame?.toLocaleTimeString()}</p>
            <p>Time Finished: {endGame?.toLocaleTimeString()} </p>
            <p>Elapsed Time (s): {elapsedTime} </p>
            <p>Number of clicks: {counter + 1}</p>
            <Link to='/'>
                <p>Start New Game</p>
            </Link>
        </div>
    )
}

export default LastPage;
