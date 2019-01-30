import React from "react";
import "../setupTests"

import { App } from "./App";
import renderer from 'react-test-renderer';
import { mount, shallow } from "enzyme";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from '../store/reducer';

const store = createStore(reducer);

describe(`Card deck`, () => {
	test('should match the Snapshot', () => {
		const wrapper = renderer.create(<Provider store={store}>
      <App />
    </Provider>).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	test('should set state.value', () => {
    const wrapper = shallow(<Provider store={store}>
      <App />
    </Provider>);
    wrapper.setState({
      players: [{ name: 'Player 1 Name' }, { name: 'Player 2 Name' }]
    });
		expect(wrapper.state().players).toEqual([{ name: 'Player 1 Name' }, { name: 'Player 2 Name' }]);
	});
});