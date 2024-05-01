"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.Rank = exports.Suit = void 0;
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 0] = "Clubs";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit || (exports.Suit = Suit = {}));
var Rank;
(function (Rank) {
    Rank[Rank["Two"] = 0] = "Two";
    Rank[Rank["Three"] = 1] = "Three";
    Rank[Rank["Four"] = 2] = "Four";
    Rank[Rank["Five"] = 3] = "Five";
    Rank[Rank["Six"] = 4] = "Six";
    Rank[Rank["Seven"] = 5] = "Seven";
    Rank[Rank["Eight"] = 6] = "Eight";
    Rank[Rank["Nine"] = 7] = "Nine";
    Rank[Rank["Ten"] = 8] = "Ten";
    Rank[Rank["Jack"] = 9] = "Jack";
    Rank[Rank["Queen"] = 10] = "Queen";
    Rank[Rank["King"] = 11] = "King";
    Rank[Rank["Ace"] = 12] = "Ace";
})(Rank || (exports.Rank = Rank = {}));
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}
exports.Card = Card;
