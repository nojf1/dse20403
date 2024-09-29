import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const UserService = {
  // Register a new user
  registerUser: async (user) => {
    try {
      const response = await axios.post(`${API_URL}/register`, user);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error registering user');
    }
  },

  // Get a user by username
  getUserByUsername: async (username) => {
    try {
      const response = await axios.get(`${API_URL}/username`, { params: { username } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching user by username');
    }
  },

  // Get a user by email
  getUserByEmail: async (email) => {
    try {
      const response = await axios.get(`${API_URL}/email`, { params: { email } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching user by email');
    }
  },

  // Login a user
  loginUser: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      return response.data; // Ensure the response contains the token
    } catch (error) {
      if (error.response) {
        throw error;
      } else {
        throw new Error('Network error');
      }
    }
  },

  // Update a user
  updateUser: async (user) => {
    try {
      const response = await axios.put(`${API_URL}/update`, user);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error updating user');
    }
  },

  // Delete a user
  deleteUser: async (username) => {
    try {
      await axios.delete(`${API_URL}/delete`, { params: { username } });
    } catch (error) {
      throw new Error(error.response.data.message || 'Error deleting user');
    }
  },

  // Find all users
  findAllUsers: async () => {
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      const response = await axios.get(`${API_URL}/all`, {
        headers: {
          Authorization: `Bearer ${token}` // Include the token in the request headers
        }
      });
      console.log('API response:', response.data); // Log the API response
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching users. Log in to view.');
    }
  }
};

export default UserService;