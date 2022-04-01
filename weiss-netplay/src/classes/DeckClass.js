export default class DeckClass {
  constructor(cards) {
    this.cards = cards;
  }

  removeTopCard() {
    this.cards.shift();
  }
}
