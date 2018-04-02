const axios = require('axios');
const appHelpers = require('../helpers/appHelpers');
const wikiGetRequest = appHelpers.wikiGetRequest;
const wikiDataProcessor = appHelpers.wikiDataProcessor;

describe('wikiGetRequest', () => {
  let data = { data: { query: { random: [{title: 'some title'}] } } }
  const res = { send: jest.fn(() => {}) };
  const address = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=1&rnnamespace=0'
  axios.get = jest.fn(() => { return Promise.resolve(data)})

  it('calls .get on the axios module', () => {
    wikiGetRequest(axios, res);

    expect(axios.get).toHaveBeenCalledWith(address)
  })

  describe('when request successful', () => {
    it('sends the response', () => {
      wikiGetRequest(axios, res)
      expect(res.send).toHaveBeenCalledWith(wikiDataProcessor(data))
    })
  })
});

describe('wikiDataProcessor', () => {
  let data = { data: { query: { random: [{title: 'some title'}] } } }

  it('creates an object with a title and url', () => {
    expectedObject = { title: 'some title', url: 'https://en.wikipedia.org/wiki/some title'}
    expect(wikiDataProcessor(data)).toEqual(expectedObject)
  })
})
