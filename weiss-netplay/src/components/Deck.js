import React from 'react';
import DeckClass from '../classes/DeckClass';
import Card from './Card';

export default function Deck({ deck }) {
  return (
    <>
      {deck.length > 0 ? <Card card={deck[deck.length - 1]} /> : <Card />}
    </>
  );
}
