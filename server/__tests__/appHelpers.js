const axios = require('axios');
const appHelpers = require('../helpers/appHelpers');
const wikiGetRequest = appHelpers.wikiGetRequest;
const wikiDataProcessor = appHelpers.wikiDataProcessor;

let response = { data: { query: { random: [{title: 'some title'}, {title: 'another title'}]}}}

describe('wikiGetRequest', () => {
  const res = { send: jest.fn(() => {}) };
  const address = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=10&rnnamespace=0'
  axios.get = jest.fn(() => { return Promise.resolve(response)})

  it('calls .get on the axios module', () => {
    wikiGetRequest(axios, res);

    expect(axios.get).toHaveBeenCalledWith(address)
  })

  describe('when request successful', () => {
    it('sends the response', () => {
      wikiGetRequest(axios, res)
      expect(res.send).toHaveBeenCalledWith(wikiDataProcessor(response))
    })
  })
});

describe('wikiDataProcessor', () => {
  it('creates an object with a title and url', () => {
    expectedObject = {
      0: { title: 'some title', url: 'https://en.wikipedia.org/wiki/some title'},
      1: { title: 'another title', url: 'https://en.wikipedia.org/wiki/another title'}
    }
    expect(wikiDataProcessor(response)).toEqual(expectedObject)
  })
})
