import React from 'react';
import Skills from './Skills';
import { shallow } from 'enzyme';

it('Renders Skills Component Correctly', () => {
  const component = shallow(<Skills />);
  expect(component).toMatchSnapshot();
});
