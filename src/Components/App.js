import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from './Layout';
import Deck from './Deck';
import Player from './Player';
import { Button, Footer } from '../Styles/Styled';

import { allocatePlayerHands, onLoadDeck } from '../actions/gameActions';
import DeckGenerator from '../GameLogic/deck';
import { checkWinner } from '../utils';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [{ name: 'Player 1 Name' }, { name: 'Player 2 Name' }],
      deckWithSelectedCards: []
    };

    this.onAddPlayer = this.onAddPlayer.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);
    this.onCheckWinner = this.onCheckWinner.bind(this);
  }

  componentDidMount() {
    DeckGenerator.generate_deck();
    this.props.onLoadDeck && this.props.onLoadDeck(DeckGenerator.deck);
  }

  componentDidUpdate(prevProps) {
    const { cardsDeck } = this.props;
    if (cardsDeck !== prevProps.cardsDeck) {
      //shuffle?
      const shuffledDeck = this.shuffle();
      this.setState({ shuffledDeck }, () => this.allocatePlayerHands());
    }
  }

  shuffle() {
    let currentIndex = DeckGenerator.deck.length,
      temp_val,
      rand_ind;

    let shuffledDeck = DeckGenerator.deck.slice();

    while (0 !== currentIndex) {
      rand_ind = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temp_val = shuffledDeck[currentIndex];
      shuffledDeck[currentIndex] = shuffledDeck[rand_ind];
      shuffledDeck[rand_ind] = temp_val;
    }

    return shuffledDeck;
  }

  showErrorMsg() {
    alert('A game can have between 2 and 6 players');
  }

  onAddPlayer() {
    const { players } = this.state;
    if (Array.isArray(players) && players.length >= 2 && players.length < 6) {
      players.push(this.createNewPlayer());
      this.setState({ players }, () => this.allocatePlayerHands());
    } else {
      this.showErrorMsg();
    }
  }

  onRemovePlayer(e, index) {
    const { players } = this.state;
    if (Array.isArray(players) && players.length > 2) {
      players.splice(index, 1);
      this.setState({ players }, () => this.allocatePlayerHands());
    } else {
      this.showErrorMsg();
    }
  }

  onCheckWinner() {
    const { allocatedDeck } = this.props;
    const winner = checkWinner(allocatedDeck);
    alert(`Player number ${winner} is the winner`);
  }

  createNewPlayer() {
    const { players } = this.state;
    return {
      name: `Player ${players.length + 1} Name`
    };
  }

  allocatePlayerHands() {
    let deck = this.state.shuffledDeck.slice();
    this._playerHands = [];
    let suits = [];
    let values = [];
    let deckWithSelectedCards = [];

    for (let i = 0; i < this.state.players.length; i++) {
      for (let i = 0; i < 5; i++) {
        suits.push(deck[i].suit);
        values.push(deck[i].value);
        deck[i].isSelected = true;
      }

      this._playerHands.push({
        suit: suits,
        value: values
      });
      suits = [];
      values = [];
      deckWithSelectedCards.push(deck.splice(0, 5));
    }

    this.setState({ playerHands: this._playerHands, deckWithSelectedCards });
    this.props.allocatePlayerHands(deckWithSelectedCards);
  }

  renderPlayers() {
    const { players } = this.state;
    const { allocatedDeck } = this.props;

    let renderPlayers = null;

    if (allocatedDeck && Array.isArray(allocatedDeck)) {
      renderPlayers = players.map((player, i) => {
        return (
          <Player
            playerName={player.name}
            key={`player_${i}`}
            removed={e => this.onRemovePlayer(e, i)}
            playerHand={allocatedDeck[i]}
          />
        );
      });
    }

    return renderPlayers;
  }

  render() {
    return (
      <Layout>
        <section>
          <h1>Cards deck</h1>
          <Deck cardsDeck={this.props.cardsDeck && this.props.cardsDeck} />
        </section>
        <section>
          <header>
            <h1>Players</h1>
          </header>
          <section>{this.state.players && this.renderPlayers()}</section>
          <Footer>
            <Button onClick={this.onAddPlayer}>
              <span
                role="img"
                alt="woman raising hand"
                aria-label="woman raising hand"
              >
                🙋‍♀️
              </span>
              Add new player
            </Button>
            <Button onClick={this.onCheckWinner}>
              <span role="img" alt="trophy" aria-label="trophy">
                🏆
              </span>
              Find the winner
            </Button>
          </Footer>
        </section>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardsDeck: state.deck.cardsDeck,
    allocatedDeck: state.deck.allocatedDeck
  };
};

function mapDispatchToProps(dispath) {
  return bindActionCreators(
    {
      onLoadDeck,
      allocatePlayerHands
    },
    dispath
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
