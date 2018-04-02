import React from 'react';
import Article from '../Article';
import { shallow } from 'enzyme';

describe('Article', () => {
  const props = { url:'testWikiUrl', title:'testTitle' };
  const article = shallow(<Article {...props} />)

  it('renders properly', () => {
    expect(article).toMatchSnapshot();
  });

  it('intializes an article with a title in state', () => {
    expect(article.state().title).toEqual('testTitle');
  });
});
