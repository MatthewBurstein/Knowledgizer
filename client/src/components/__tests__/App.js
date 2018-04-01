import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Contains an Article component', () => {
    const article = app.find('Article');

    expect(article.exists()).toBe(true);
  })
});
