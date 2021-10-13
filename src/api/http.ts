import axios from 'axios';

const {
    REACT_APP_API_BASE_URL: baseURL,
    REACT_APP_API_KEY: API_KEY
} = process.env;

const http = axios.create({
  baseURL,
  headers: {
    'x-api-key': API_KEY!,
    'Content-Type': 'application/json'
  }
});

export default http;