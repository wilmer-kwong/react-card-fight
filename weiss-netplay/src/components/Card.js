import React from 'react';

export default function Card({ card }) {
  return (
    <>
      <div className="min-w-min rounded border border-blue-200 bg-gray-100">
        <div className="h-40 w-28 flex items-center justify-center">
          {card ? <span className="">{card.name}</span> : 'empty deck'}
        </div>
      </div>
    </>
  );
}
