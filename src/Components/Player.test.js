import renderer from 'react-test-renderer';
import React from "react";
import "../setupTests"

import Player from "./Player";

describe(`Card deck`, () => {
	test('should match the Snapshot', () => {
    const playerHand = [
      {name: "A of S", suit: "S", value: "A", isSelected: true},
      {name: "8 of C", suit: "C", value: "8", isSelected: true},
      {name: "4 of S", suit: "S", value: "4", isSelected: true},
      {name: "8 of D", suit: "D", value: "8", isSelected: true},
      {name: "9 of H", suit: "H", value: "9", isSelected: true}
    ];
		const wrapper = renderer.create(
      <Player playerName='Player 1' 
        key='1'
        remopved={() => { }}
        playerHand={playerHand}
      />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	
});