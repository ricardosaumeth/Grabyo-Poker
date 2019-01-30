import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck } from '../Styles/Styled';

export class Deck extends Component {
  render() {
    const { cardsDeck, allocatedDeck } = this.props;

    let cards = [];
    if (Array.isArray(cardsDeck) && cardsDeck) {
      let chunkOfCards1 = [];
      let chunkOfCards2 = [];
      let chunkOfCards3 = [];
      let chunkOfCards4 = [];

      for (let i = 0; i < 13; i++) {
        let isSelected = false;
        if (Array.isArray(allocatedDeck) && allocatedDeck) {
          for (let j = 0; j < allocatedDeck.length; j++) {
            for (let k = 0; k < 5; k++) {
              if (cardsDeck[i].name === allocatedDeck[j][k].name) {
                isSelected = true;
              }
            }
          }
        }

        chunkOfCards1.push(
          <Card
            key={cardsDeck[i].suit + cardsDeck[i].value}
            suit={cardsDeck[i].suit}
            value={cardsDeck[i].value}
            selected={isSelected}
          >
            {cardsDeck[i].value}
          </Card>
        );
      }

      for (let i = 13; i < 26; i++) {
        let isSelected = false;
        if (Array.isArray(allocatedDeck) && allocatedDeck) {
          for (let j = 0; j < allocatedDeck.length; j++) {
            for (let k = 0; k < 5; k++) {
              if (cardsDeck[i].name === allocatedDeck[j][k].name) {
                isSelected = true;
              }
            }
          }
        }
        chunkOfCards2.push(
          <Card
            key={cardsDeck[i].suit + cardsDeck[i].value}
            suit={cardsDeck[i].suit}
            value={cardsDeck[i].value}
            selected={isSelected}
          >
            {cardsDeck[i].value}
          </Card>
        );
      }
      for (let i = 26; i < 39; i++) {
        let isSelected = false;
        if (Array.isArray(allocatedDeck) && allocatedDeck) {
          for (let j = 0; j < allocatedDeck.length; j++) {
            for (let k = 0; k < 5; k++) {
              if (cardsDeck[i].name === allocatedDeck[j][k].name) {
                isSelected = true;
              }
            }
          }
        }
        chunkOfCards3.push(
          <Card
            key={cardsDeck[i].suit + cardsDeck[i].value}
            suit={cardsDeck[i].suit}
            value={cardsDeck[i].value}
            selected={isSelected}
          >
            {cardsDeck[i].value}
          </Card>
        );
      }
      for (let i = 39; i < 52; i++) {
        let isSelected = false;
        if (Array.isArray(allocatedDeck) && allocatedDeck) {
          for (let j = 0; j < allocatedDeck.length; j++) {
            for (let k = 0; k < 5; k++) {
              if (cardsDeck[i].name === allocatedDeck[j][k].name) {
                isSelected = true;
              }
            }
          }
        }
        chunkOfCards4.push(
          <Card
            key={cardsDeck[i].suit + cardsDeck[i].value}
            suit={cardsDeck[i].suit}
            value={cardsDeck[i].value}
            selected={isSelected}
          >
            {cardsDeck[i].value}
          </Card>
        );
      }

      const Deck = (
        <CardDeck key="cardDeck">
          <div key="1">{chunkOfCards1}</div>
          <div key="2">{chunkOfCards2}</div>
          <div key="3">{chunkOfCards3}</div>
          <div key="4">{chunkOfCards4}</div>
        </CardDeck>
      );

      cards.push(Deck);
    }

    return cards;
  }
}

const mapStateToProps = state => {
  return {
    cardsDeck: state.deck.cardsDeck,
    allocatedDeck: state.deck.allocatedDeck
  };
};

export default connect(mapStateToProps)(Deck);
