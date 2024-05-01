"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const card_1 = require("./card");
class Deck {
    constructor() {
        this.cards = [];
        this.initialize();
        this.shuffle();
    }
    initialize() {
        for (let suit = card_1.Suit.Clubs; suit <= card_1.Suit.Spades; suit++) {
            for (let rank = card_1.Rank.Two; rank <= card_1.Rank.Ace; rank++) {
                this.cards.push(new card_1.Card(rank, suit));
            }
        }
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    draw() {
        return this.cards.pop();
    }
}
exports.Deck = Deck;
let deck = new Deck();
deck.shuffle();
for (let i = 1; i <= 58; i++) {
    console.log(deck.draw());
}
