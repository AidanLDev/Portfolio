import React from 'react';
import Blog from './Blog';
import { shallow } from 'enzyme';

it('Renders Blog Component Correctly', () => {
  const component = shallow(<Blog />);
  expect(component).toMatchSnapshot();
});
