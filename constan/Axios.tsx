/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
const globalUrl = 'https://techtest.youapp.ai/api/';
const ApiPost = async (url: string, data: any) => {
  const token = window.localStorage.getItem('token');

  const headers: any = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['x-access-token'] = token;
  }

  try {
    const response = await axios.post(`${globalUrl}${url}`, data, { headers });
    return response;
  } catch (error: any) {
    console.error('API request error:', error.response.data.message);
    throw error;
  }
};

const ApiUpdate = async (url: string, data: any) => {
  const token = window.localStorage.getItem('token');
  const headers: any = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['x-access-token'] = token;
  }

  try {
    const response = await axios.put(`${globalUrl}${url}`, data, { headers });
    return response;
  } catch (error: any) {
    console.error('API request error:', error.response.data.message);
    throw error;
  }
};

const ApiGet = async (url: string) => {
  const token = window.localStorage.getItem('token');
  const headers: any = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['x-access-token'] = token;
  }

  try {
    const response = await axios.get(`${globalUrl}${url}`, { headers });
    return response;
  } catch (error: any) {
    console.error('API request error:', error.response.data.message);
    throw error;
  }
};

export { ApiPost, ApiUpdate, ApiGet };
