import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

jest.useFakeTimers();

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Contains an ArticleContainer component', () => {
    const articleContainer = app.find('ArticleContainer');
    expect(articleContainer).toHaveLength(1)
  })
});
