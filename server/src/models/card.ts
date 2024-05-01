export enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades,
}

export enum Rank {
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
  Ace,
}
export class Card {
  public rank: Rank;
  public suit: Suit;
  constructor(rank: Rank, suit: Suit) {
    this.rank = rank;
    this.suit = suit;
  }
  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}
