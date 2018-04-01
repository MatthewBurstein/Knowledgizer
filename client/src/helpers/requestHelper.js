import axios from 'axios';

export const wikiGetRequest = () => {
  return axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=1')
    .then(response => {
    console.log(response);
    return response
  })
}
