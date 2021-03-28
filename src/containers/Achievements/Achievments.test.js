import React from 'react';
import Achievemnts from './Achievements';
import { shallow } from 'enzyme';

it('Renders Component Correctly', () => {
  const component = shallow(<Achievemnts />);
  expect(component).toMatchSnapshot();
});
