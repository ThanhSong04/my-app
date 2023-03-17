import React from 'react';

const Section = ({ card, component }) => {
  const id = `card${card}`;
  return <div id={id}>{component}</div>;
};

export default Section;
