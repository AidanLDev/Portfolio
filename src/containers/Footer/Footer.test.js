import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

it('Renders Footer Component Correctly', () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});
