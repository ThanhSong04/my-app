import React from 'react';

const Card = ({ card, component }) => {
  const id = `card${card}`;
  return <div id={id}>{component}</div>;
};

export default Card;
