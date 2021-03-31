import React from 'react';
import Projects from './Projects';
import { shallow } from 'enzyme';

it('Renders Projects Component Correctly', () => {
  const component = shallow(<Projects />);
  expect(component).toMatchSnapshot();
});
