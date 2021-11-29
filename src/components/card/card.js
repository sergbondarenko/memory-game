import React from 'react';
import { useState, useEffect } from 'react';
import Icon from "@material-ui/core/Icon";
import './card.css';

const Card = ({ card, onClick, onTransitionEnd }) => {
  const [cardClass, setCardClass] = useState(card.startClassName);

  useEffect(() => {
    setCardClass(card.endClassName);
  });

  return (
    <div className="container" >
      <div id="card" className={cardClass} onClick={() => onClick(card.id)} onTransitionEnd={() => onTransitionEnd(card.id)} >
        <figure className="front"></figure>
        <figure className="back" ><Icon>{card.iconName}</Icon></figure>
      </div>
    </div>
  );
}

export default Card;
