import util from 'util';
import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

jest.useFakeTimers();

describe('App', () => {
  const articles = [
    { id:1, title: 'some title', url: 'https://en.wikipedia.org/wiki/some title'},
    { id:2, title: 'another title', url: 'https://en.wikipedia.org/wiki/another title'}
  ]
  const app = shallow(<App />);
  app.setState({ articles });

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Contains an Article component for each article in `state`', () => {
    const articles = app.find('Article');
    expect(articles).toHaveLength(2);
  })
});
