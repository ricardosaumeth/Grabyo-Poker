import React, { Component } from 'react';
import { Card, PlayerHand, Button } from '../Styles/Styled';
import Input from './Common/Input';

export default class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInputDisabled: true
    };

    this.textInput = React.createRef();
    this.onHandlerEditBtn = this.onHandlerEditBtn.bind(this);
  }

  onHandlerEditBtn() {
    this.setState({ isInputDisabled: false });
    this.textInput.current.textInput.current.focus();
  }

  renderPlayerHand() {
    const { playerHand } = this.props;
    if (playerHand && Array.isArray(playerHand)) {
      let cards = [];
      for (let i = 0; i < 5; i++) {
        cards.push(
          <Card key={i} suit={playerHand[i].suit} value={playerHand[i].value}>
            {playerHand[i].value}
          </Card>
        );
      }

      return <PlayerHand>{cards}</PlayerHand>;
    } else {
      return;
    }
  }

  render() {
    const { playerName, removed } = this.props;
    const { isInputDisabled } = this.state;
    return (
      <article>
        <p>
          <Input
            playerName={playerName}
            isDisabled={isInputDisabled}
            ref={this.textInput}
          />
          <Button onClick={this.onHandlerEditBtn}>
            <span role="img" alt="pencil" aria-label="pencil">
              ✏️
            </span>
            Edit
          </Button>
          <Button onClick={removed}>
            <span role="img" alt="flame" aria-label="flame">
              🔥
            </span>
            Remove
          </Button>
        </p>
        {this.renderPlayerHand()}
      </article>
    );
  }
}
