import React from 'react';
import ArticlesContainer from '../ArticlesContainer';
import { shallow, mount } from 'enzyme';

jest.useFakeTimers();

describe('ArticlesContainer', () => {
  const articles = [
    { id:1, title: 'some title', url: 'https://en.wikipedia.org/wiki/some title' },
    { id:2, title: 'another title', url: 'https://en.wikipedia.org/wiki/another title' },
    { id: 3, title: 'a third title', url: 'https://en.wikipedia.org/wiki/a third title' }
  ];
  let articlesContainer = shallow(<ArticlesContainer />);
  articlesContainer.setState({ articles });

  it('renders correctly', () => {
    expect(articlesContainer).toMatchSnapshot();
  });

  it('contains a Controls component', () => {
    const controls = articlesContainer.find('Controls');
    expect(controls).toHaveLength(1)
  })

  it('Contains an Article component for each article in `state`', () => {
    const articles = articlesContainer.find('Article');
    expect(articles).toHaveLength(3);
  });

  describe('.clearArticles()', () => {
    it('clears all articles from state', () => {
      articlesContainer.instance().clearArticles()
      expect(articlesContainer.state().articles).toHaveLength(0)
    });
  });

  describe('.stopPrinting', () => {
    beforeEach(() => {
      articlesContainer.instance().stopPrinting();
    })

    it('sets this.shouldPrint to false', () => {
      expect(articlesContainer.instance().shouldPrint.print).toBe(false)
    })

    it('sets state.shouldPrint to false', () => {
      expect(articlesContainer.state().shouldPrint).toBe(false)
    })
  })

  describe('.startPrinting', () => {
    beforeEach(() => {
      articlesContainer.instance().printArticles = jest.fn()
      articlesContainer.instance().stopPrinting();
      articlesContainer.instance().startPrinting();
    })

    it('sets state.shouldPrint to true', () => {
      expect(articlesContainer.instance().shouldPrint.print).toBe(true)
    })

    it('calls this.printArticles', () => {
      expect(articlesContainer.instance().printArticles).toHaveBeenCalledTimes(1);
    })

    it('sets state.shouldPrint to true', () => {
      expect(articlesContainer.state().shouldPrint).toBe(true);
    })
  })

  describe('delay and repeat article rendering functionality', () => {
    let mountedArticlesContainer, callApiSpy, didMountSpy, setStateSpy;
    beforeAll(() => {
      callApiSpy = jest.spyOn(ArticlesContainer.prototype, 'callApi').mockReturnValue(Promise.resolve({articles}));
      setStateSpy = jest.spyOn(ArticlesContainer.prototype, 'setState');
      mountedArticlesContainer = mount(<ArticlesContainer />);
    });

    it('calls call Api on mounting', () => {
      expect(callApiSpy).toHaveBeenCalledTimes(1);
    });

    it('calls setState once per second with the next article from this.articles', () => {
      expect(setStateSpy).not.toHaveBeenCalled();

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(1);
      expect(mountedArticlesContainer.state().articles).toContain(articles[0]);

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(2);
      expect(mountedArticlesContainer.state().articles).toContain(articles[1]);

      jest.runTimersToTime(1000);
      expect(setStateSpy).toHaveBeenCalledTimes(3);
      expect(mountedArticlesContainer.state().articles).toContain(articles[2]);
    });
  });

})
