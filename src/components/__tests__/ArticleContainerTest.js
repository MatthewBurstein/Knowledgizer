import React from 'react';
import ArticleContainer from '../ArticleContainer';
import { shallow, mount } from 'enzyme';

jest.useFakeTimers();

describe('ArticleContainer', () => {
  const articles = [
    { id:1, title: 'some title', url: 'https://en.wikipedia.org/wiki/some title'},
    { id:2, title: 'another title', url: 'https://en.wikipedia.org/wiki/another title'},
    { id: 3, title: 'a third title', url: 'https://en.wikipedia.org/wiki/a third title' }
  ];
  const articleContainer = shallow(<ArticleContainer />);
  articleContainer.setState({ articles });

  it('renders correctly', () => {
    expect(articleContainer).toMatchSnapshot();
  });

  it('Contains an Article component for each article in `state`', () => {
    const articles = articleContainer.find('Article');
    expect(articles).toHaveLength(3);
  });

  describe('delay and repeat article rendering functionality', () => {
    let mountedArticleContainer, callApiSpy, didMountSpy, setStateSpy;
    beforeAll(() => {
      callApiSpy = jest.spyOn(ArticleContainer.prototype, 'callApi').mockReturnValue(Promise.resolve({articles}));
      setStateSpy = jest.spyOn(ArticleContainer.prototype, 'setState');
      mountedArticleContainer = mount(<ArticleContainer />);
    });

    it('calls call Api on mounting', () => {
      expect(callApiSpy).toHaveBeenCalledTimes(1);
    });

    it('calls setState once per second with the next article from this.articles', () => {
      expect(setStateSpy).not.toHaveBeenCalled();

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(1);
      expect(mountedArticleContainer.state().articles).toContain(articles[0]);

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(2);
      expect(mountedArticleContainer.state().articles).toContain(articles[1]);

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(3);
      expect(mountedArticleContainer.state().articles).toContain(articles[2]);
    });
  });

})
