import React from 'react';
import Article from '../Article';
import { shallow } from 'enzyme';

describe('Article', () => {
  const article = shallow(<Article />)
  it('renders properly', () => {
    expect(article).toMatchSnapshot();
  });

  it('intializes an article with a title in state', () => {
    expect(article.state().title).toBeDefined;
  });
});
