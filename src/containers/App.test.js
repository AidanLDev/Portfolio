import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('Renders App Component Correctly', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
