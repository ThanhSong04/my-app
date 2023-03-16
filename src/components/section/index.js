import React from 'react';

const section = ({ card, component }) => {
  const id = `card${card}`;
  return <div id={id}>{component}</div>;
};

export default section;
