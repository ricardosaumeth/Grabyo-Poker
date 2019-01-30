import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.textInput = React.createRef();
    this.onChangedInput = this.onChangedInput.bind(this);
  }

  onChangedInput(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { playerName, isDisabled } = this.props;
    const { value } = this.state;
    return (
      <input
        type="text"
        placeholder={playerName}
        value={value}
        ref={this.textInput}
        onChange={this.onChangedInput}
        disabled={isDisabled}
      />
    );
  }
}
