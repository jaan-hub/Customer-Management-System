import axios from 'axios';

// During development we call the Vite dev server at http://localhost:5173,
// which will proxy /api/* requests to your deployed backend.
const API_BASE_URL = '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const addCustomer = async (customer) => {
  const response = await apiClient.post('/add', customer);
  return response.data;
};

export const addCustomersBulk = async (customers) => {
  const response = await apiClient.post('/add all', customers);
  return response.data;
};

export const getAllCustomers = async () => {
  const response = await apiClient.get('/display');
  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await apiClient.delete(`/delete/${id}`);
  return response.data;
};

export const searchCustomerById = async (id) => {
  const response = await apiClient.post(`/search/${id}`);
  return response.data;
};

export const searchCustomerByMobile = async (mob) => {
  const response = await apiClient.post(`/search/mob/${mob}`);
  return response.data;
};

