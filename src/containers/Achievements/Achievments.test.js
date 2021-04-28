import React from 'react';
import Achievemnts from './Achievements';
import { shallow } from 'enzyme';

describe('<Achievements />', () => {
  it('Renders Achievemnts Component Correctly', () => {
    const component = shallow(<Achievemnts />);
    expect(component).toMatchSnapshot();
  });
});
