import React from 'react';
import { shallow } from 'enzyme';
import BlogCard from './BlogCard';

test('Renders BlogCard Component', () => {
  const component = shallow(
    <BlogCard title='About Aidans Life' description='once upon a time...' />
  );
  expect(component).toMatchSnapshot();
});
