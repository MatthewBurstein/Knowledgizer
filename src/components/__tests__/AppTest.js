import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';

jest.useFakeTimers();

describe('App', () => {
  const articles = [
    { id:1, title: 'some title', url: 'https://en.wikipedia.org/wiki/some title'},
    { id:2, title: 'another title', url: 'https://en.wikipedia.org/wiki/another title'},
    { id: 3, title: 'a third title', url: 'https://en.wikipedia.org/wiki/a third title' }
  ];
  const app = shallow(<App />);
  app.setState({ articles });

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Contains an ArticleContainer component', () => {
    const articleContainer = app.find('ArticleContainer');
    expect(articleContainer).toHaveLength(1)
  })

  it('Contains an Article component for each article in `state`', () => {
    const articles = app.find('Article');
    expect(articles).toHaveLength(3);
  });

  describe('delay and repeat article rendering functionality', () => {
    let mountedApp, callApiSpy, didMountSpy, setStateSpy;
    beforeAll(() => {
      callApiSpy = jest.spyOn(App.prototype, 'callApi').mockReturnValue(Promise.resolve({articles}));
      setStateSpy = jest.spyOn(App.prototype, 'setState');
      mountedApp = mount(<App />);
    });

    it('calls call Api on mounting', () => {
      expect(callApiSpy).toHaveBeenCalledTimes(1);
    });

    it('calls setState once per second with the next article from this.articles', () => {
      expect(setStateSpy).not.toHaveBeenCalled();

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(1);
      expect(mountedApp.state().articles).toContain(articles[0]);

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(2);
      expect(mountedApp.state().articles).toContain(articles[1]);

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(3);
      expect(mountedApp.state().articles).toContain(articles[2]);
    });
  });

});
