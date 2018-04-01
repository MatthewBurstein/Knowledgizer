import axios from 'axios';
import { wikiGetRequest } from '../requestHelper';
const util = require('util');

jest.mock('axios')

describe('wikiGetRequest', () => {
  jest.mock('axios');
  it('gets an article', () => {
    const resp = {
    "query": {
      "random": [
        {
          "id": 51892620,
          "ns": 0,
          "title": "Amita Chapra"
          }
        ]
      }
    }
    axios.get.mockImplementation(() => Promise.resolve(resp))

    return wikiGetRequest().then(data => expect(data).toEqual(resp));
  });
});
