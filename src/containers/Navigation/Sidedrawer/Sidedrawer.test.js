import React from 'react';
import Sidedrawer from './Sidedrawer';
import { shallow } from 'enzyme';

it('Renders Sidedrawer Component Correctly', () => {
  const component = shallow(<Sidedrawer />);
  expect(component).toMatchSnapshot();
});
