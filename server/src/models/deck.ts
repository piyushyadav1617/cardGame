import { Card, Suit, Rank } from "./card";

export class Deck {
  private cards: Card[];

  constructor() {
    this.cards = [];
    this.initialize();
    this.shuffle();
  }
  private initialize() {
    for (let suit = Suit.Clubs; suit <= Suit.Spades; suit++) {
      for (let rank = Rank.Two; rank <= Rank.Ace; rank++) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  draw(): Card | undefined {
    return this.cards.pop();
  }
  getRandomeCard():Card{
    return this.cards[Math.random()*this.cards.length]
  }
}

let deck = new Deck();
deck.shuffle();

for(let i =1; i<=58;i++){
    console.log(deck.draw())
}
