import axios from 'axios';


const KEY = 'AIzaSyBu9prOjS4tDP8AU2C1qu0bu0g9_VQVBbk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});