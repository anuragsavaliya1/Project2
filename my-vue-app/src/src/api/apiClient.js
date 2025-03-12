import axios from "axios";

const API_BASE_URL = "https://shortieb.codderlab.com/"; // Update this with your actual backend URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding headers dynamically
apiClient.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    const secretKey = "boSNvZJdf0daHwdURFhRKNj99Xr3v7Ww"; // Fetch dynamically if needed
    config.headers["key"] = secretKey;
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
