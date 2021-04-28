import React from 'react';
import { shallow } from 'enzyme';
import BlogCard from './BlogCard';
import styles from './Style.module.scss';

describe('<BlogCard />', () => {
  const titleProp = 'About Aidans Life';
  const descriptionProp = 'once upon a time...';
  const component = shallow(
    <BlogCard title={titleProp} description={descriptionProp} />
  );
  test('Renders BlogCard Component', () => {
    expect(component).toMatchSnapshot();
  });

  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/contains.html
  // it('Contains a title and paragraph', () => {
  //   expect(component.contains(<div className={styles.blogCardContainer}>
  //     <h1>{titleProp}</h1>
  //     <p>{descriptionProp}</p>
  //   </div>).toEqual(true))
  // })
});
