import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const TaskService = {
  // Create a new task
  createTask: async (task) => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    try {
        const response = await axios.post(`${API_URL}/create`, task, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('Task created:', response.data);
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
},

  // Get all tasks
  getAllTasks: async () => {
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
      throw new Error(error.response.data.message || 'Error fetching tasks');
    }
  },

  // Get tasks by title
  getTasksByTitle: async (title) => {
    try {
      const response = await axios.get(`${API_URL}/title`, { params: { title } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching tasks by title');
    }
  },

  // Get tasks by status
  getTasksByStatus: async (status) => {
    try {
      const response = await axios.get(`${API_URL}/status`, { params: { status } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching tasks by status');
    }
  },

  // Get tasks by priority
  getTasksByPriority: async (priority) => {
    try {
      const response = await axios.get(`${API_URL}/priority`, { params: { priority } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching tasks by priority');
    }
  },

  // Get tasks by category
  getTasksByCategory: async (category) => {
    try {
      const response = await axios.get(`${API_URL}/category`, { params: { category } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching tasks by category');
    }
  },

  // Get tasks by user
  getTasksByUser: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/user`, { params: { userId } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching tasks by user');
    }
  },

  // Get tasks by creation date
  getTasksByCreatedAt: async (createdAt) => {
    try {
      const response = await axios.get(`${API_URL}/dateCreated`, { params: { createdAt } });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching tasks by creation date');
    }
  },

  // Update a task
  updateTask: async (id, task) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, task);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error updating task');
    }
  },

  // Delete a task
  deleteTask: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      throw new Error(error.response.data.message || 'Error deleting task');
    }
  }
};

export default TaskService;