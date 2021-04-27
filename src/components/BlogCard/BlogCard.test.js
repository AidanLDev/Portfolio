import React from 'react';
import { shallow } from 'enzyme';
import BlogCard from './BlogCard';

describe('<BlogCard />', () => {
  const component = shallow(
    <BlogCard title='About Aidans Life' description='once upon a time...' />
  );
  test('Renders BlogCard Component', () => {
    expect(component).toMatchSnapshot();
  });
});
