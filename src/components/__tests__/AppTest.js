import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Contains an ArticlesContainer component', () => {
    const articlesContainer = app.find('ArticlesContainer');
    expect(articlesContainer).toHaveLength(1)
  })
});
