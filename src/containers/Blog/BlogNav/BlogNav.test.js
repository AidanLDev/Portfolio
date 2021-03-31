import React from 'react';
import BlodNav from './BlogNav';
import { shallow } from 'enzyme';

it('Renders BlodNav Component Correctly', () => {
  const component = shallow(<BlodNav />);
  expect(component).toMatchSnapshot();
});
