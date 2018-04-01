import React from 'react';
import Article from '../article';
import { shallow } from 'enzyme';

describe('Article', () => {
  const article = shallow(<Article />)
  it('renders properly', () => {
    expect(article).toMatchSnapshot();
  })
})
