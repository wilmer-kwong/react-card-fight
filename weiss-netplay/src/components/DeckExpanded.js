import React from 'react';
import Card from './Card';

export default function DeckExpanded({ deck }) {
  return (
    <>
      {deck.map((item, i) => (
        <Card card={item} key={item + i} />
      ))}
    </>
  );
}
