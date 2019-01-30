import { mount, shallow } from "enzyme";
import React from "react";
import "../setupTests"

import { Deck } from "./Deck";

import renderer from 'react-test-renderer';

import DeckGenerator from '../GameLogic/deck';

describe(`Card deck`, () => {
	test('should match the Snapshot', () => {
		DeckGenerator.generate_deck();
		const deckCards = DeckGenerator.deck;
		const wrapper = renderer.create(<Deck cardsDeck={deckCards} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	test('should call Deckclass and create the deck', () => {
		DeckGenerator.generate_deck();
		const deckCards = DeckGenerator.deck;
		expect(deckCards).toContainEqual({ name: '2 of D', suit: 'D', value: '2', isSelected: false });
	});
});
