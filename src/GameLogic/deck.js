import { suits, values } from '../utils';

class Deck {
  constructor() {
    this.deck = [];
    this.dealt_cards = [];
  }

  // generates a deck of cards
  generate_deck() {
    // creates card object
    let card = (suit, value) => {
      this.name = value + ' of ' + suit;
      this.suit = suit;
      this.value = value;
      this.isSelected = false;

      return { name: this.name, suit: this.suit, value: this.value, isSelected: this.isSelected };
    };

    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        this.deck.push(card(suits[s], values[v]));
      }
    }
  }

  // prints the deck of card objects
  print_deck() {
    if (this.deck.length === 0) {
      console.log(
        'Deck has not been generated. Call generate_deck() on deck object before continuing.'
      );
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c]);
      }
    }
  }

  // deal a number cards
  deal(num_cards) {
    let cards = [];

    for (let c = 0; c < num_cards; c++) {
      let dealt_card = this.deck.shift();
      cards.push(dealt_card);
      this.dealt_cards.push(dealt_card);
    }

    return cards;
  }

  replace() {
    this.deck.unshift(this.dealt_cards.shift());
  }

  clear_deck() {
    this.deck = [];
  }
}


export default new Deck();