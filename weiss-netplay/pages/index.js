import React, { useState } from 'react';
import Head from 'next/head';

// classes
import Card from '../src/classes/CardClass';
import DeckClass from '../src/classes/DeckClass';

import DeckExpanded from '../src/components/DeckExpanded';
import Deck from '../src/components/Deck';

export default function Home() {
  // generate an example deck
  let exampleCardListNames = [];
  const cardNames = [...Array(50).keys()];
  cardNames.forEach((name, i) => exampleCardListNames.push(new Card(name, i)));

  let exampleDeck = new DeckClass(exampleCardListNames);

  const [deck, setDeck] = useState(exampleDeck.cards);

  function makeRandomCard() {
    const rand = Math.floor(Math.random()*50);
    return new Card(`${rand}`, rand)
  }

  function removeCardTopHandler() {
    if (deck.length > 0) setDeck((arr) => arr.slice(0, arr.length - 1));
  }

  function addCardTopDeckHandler() {
    const newCard = makeRandomCard();
    setDeck((arr) => [...arr, newCard]);
  }

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600">
            Netplay
          </a>
        </h1>

        <p className="mt-3 py-8 text-2xl">
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Play around with this deck example
          </code>
        </p>
        <div className='flex flex-col gap-y-4 w-4/5 items-center justify-center'>
          <Deck key={deck} deck={deck} setDeck={setDeck} />
          <div className="flex flex-row-reverse w-full overflow-x-auto"><DeckExpanded deck={deck} /></div>
        </div>

        <p>Cards in deck: {deck.length}</p>

        <button className="m-2 border p-2" onClick={removeCardTopHandler}>
          Remove the top card of the deck
        </button>
        <button className="m-2 border p-2" onClick={addCardTopDeckHandler}>
          Add a random card to the top of the deck
        </button>
      </main>

        <p className="mt-3 py-8 text-2xl">
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            What your deck would look like expanded:
          </code>
        </p>
        <div className="grid grid-cols-10 gap-4">
          <DeckExpanded deck={deck} />
        </div>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Whalemer 2022
      </footer>
    </div>
  );
}
