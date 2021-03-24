import axios from 'axios';

export const buildClient = () => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://localhost:3000',
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
