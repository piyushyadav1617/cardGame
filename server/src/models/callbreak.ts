import { Card, Suit } from "./card";
import { Deck } from "./deck";

export interface Player {
  playerId: string;
  name: string;
  cards: Card[];
  hands: number; //to be changed after one trick and then used to calculate the score for each round
  roundScores: []; //score for every round will be pushed here
  totalScore: number; //after every round this should be updated totalScore += roundScore
  bid: number;
}

export class Callbreak {
  players: Player[];
  deck: Deck;
  total_rounds: number;
  rounds_played: number;
  trump: Suit | undefined;

  constructor(total_rounds: number = 8) {
    this.players = [];
    this.deck = new Deck();
    this.total_rounds = total_rounds;
    this.rounds_played = 0;
    this.trump = undefined;
  }

  selectTrump() {
    this.trump = this.deck.getRandomeCard().suit;
  }

  addPlayer(playerId: string, name: string) {
    if (this.players.length === 4) throw new Error("room full");
    this.players.push({
      playerId: playerId,
      name: name,
      cards: [],
      hands: 0,
      roundScores: [],
      totalScore: 0,
      bid: 0,
    });
  }

  start_round() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.initializePlayers();
    this.selectTrump();
  }

  setBid(playerId: string, bid: number) {
    const player = this.players.find((p) => p.playerId === playerId);
    if (player) player.bid = bid;
  }

  calculate_score(playerId: string) {}

  initializePlayers() {
    this.players.forEach((player) => {
      player.cards = [];
      player.hands = 0;
      player.bid = 0;
      player.roundScores = [];
      player.totalScore = 0;
      for (let i = 0; i < 13; i++) {
        player.cards.push(this.deck.draw()!);
      }
    });
  }
  
}
