import axios from "axios";
import bcrypt from 'bcryptjs';

// Set up Axios instance with credentials
const api = axios.create({
  baseURL: "http://localhost:5173", // Backend URL
  withCredentials: true, // Allows cookies
});

// Login Function
export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/users/login", {login: username, password: bcrypt.hashSync(password) });
    return {data: response.data, code: response.code};
  } catch (error) {
    console.error("Login failed:", error.response?.data || error);
    throw error;
  }
};

// Check Authenticated User
export const getSession = async () => {
  try {
    const response = await api.get("users/session");
    return response.code;
  } catch (error) {
    return null;
  }
};

export const getAllEmployees = async () => {
  try {
    const response = await api.get("users/employees");
    console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
};
// Logout Function
export const logout = async () => {
  try {
    await api.post("/logout");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
