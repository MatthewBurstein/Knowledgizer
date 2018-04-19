import React from 'react';
import ArticleContainer from '../ArticleContainer';
import { shallow } from 'enzyme';

describe('ArticleContainer', () => {
  const articleContainer = shallow(<ArticleContainer />);

  it('renders correctly', () => {
    expect(articleContainer).toMatchSnapshot();
  })
})
