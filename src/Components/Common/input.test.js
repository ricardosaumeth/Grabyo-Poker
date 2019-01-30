import React from "react";
import "../../setupTests"

import Input from "./Input";
import renderer from 'react-test-renderer';
import { mount, shallow } from "enzyme";

describe(`Card deck`, () => {
	test('should match the Snapshot', () => {
		const wrapper = renderer.create(<Input  playerName='Player 1' isDisabled={true} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	test('should set state.value', () => {
    const wrapper = shallow(<Input  playerName='Player 1' isDisabled={true} />);
    wrapper.setState({ value: '1' });
		expect(wrapper.state().value).toEqual('1');
	});
});