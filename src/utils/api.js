import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';
const AUTH_URL = 'https://fakestoreapi.com/auth';

let token = null;

export const setAuthToken = userToken => {
  token = userToken;
};

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createProduct = async newProduct => {
  try {
    const response = await axios.post(API_URL, newProduct, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedProduct, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteProduct = async id => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async userData => {
  try {
    const response = await axios.post(
      'https://fakestoreapi.com/users',
      userData,
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return null;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return null;
  }
};
