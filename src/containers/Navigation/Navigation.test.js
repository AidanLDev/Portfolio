import React from 'react';
import Navigation from './Navigation';
import { shallow } from 'enzyme';

it('Renders Navigation Component Correctly', () => {
  const component = shallow(<Navigation />);
  expect(component).toMatchSnapshot();
});
