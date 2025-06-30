import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "https://news-backend-node-js.onrender.com" || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token; // Attach token to header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;


export const googleAuth = async (payload) => {
  try {
    const { data, status } = await axiosInstance.post(`/auth/google`, payload);
    if (status === 200) {
      toast.success("Logged in successfully!");
      return data;
    } else if (data?.status == 401) {
      toast.error("Your session has expired. Please log in again to continue.");
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      "An error occurred. Please try again.";
    toast.error(errorMessage);
    return false;
  }
};

export const subscribeUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/user/subscribe",
      payload
    );
    if (response && response?.status === 200) {
      return true; // Return true to indicate success
    } else if (response?.data?.status == 401) {
      toast.error("Your session has expired. Please log in again to continue.");

    };
    toast.error("Unexpected response from the server.");
    return false; // Return false to indicate failure
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      "An error occurred. Please try again.";
    toast.error(errorMessage);
    return false; // Return false to indicate failure
  }
};

export const followCategory = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/user/followCategory",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      },
      payload
    );
    if (response && response?.status === 200) {
      return true; // Return true to indicate success
    } else if (response?.data?.status == 401) {
      toast.error("Your session has expired. Please log in again to continue.");
    };
    toast.error("Unexpected response from the server.");
    return false; // Return false to indicate failure
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      "An error occurred. Please try again.";
    toast.error(errorMessage);
    return false; // Return false to indicate failure
  }
};

export const unfollowCategory = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/user/unfollowCategory",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      },
      payload
    );
    if (response && response?.status === 200) {
      return true; // Return true to indicate success
    } else if (response?.data?.status == 401) {
      toast.error("Your session has expired. Please log in again to continue.");
    };
    toast.error("Unexpected response from the server.");
    return false; // Return false to indicate failure
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      "An error occurred. Please try again.";
    toast.error(errorMessage);
    return false; // Return false to indicate failure
  }
};

export const followTag = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/user/followTag",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      },
      payload
    );
    if (response && response?.status === 200) {
      return true; // Return true to indicate success
    } else if (response?.data?.status == 401) {
      toast.error("Your session has expired. Please log in again to continue.");
    };
    toast.error("Unexpected response from the server.");
    return false; // Return false to indicate failure
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      "An error occurred. Please try again.";
    toast.error(errorMessage);
    return false; // Return false to indicate failure
  }
};

export const unfollowTag = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/user/unfollowTag",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      },
      payload
    );
    if (response && response?.status === 200) {
      return true; // Return true to indicate success
    } else if (response?.data?.status == 401) {
     toast.error("Your session has expired. Please log in again to continue.");

    };
    toast.error("Unexpected response from the server.");
    return false; // Return false to indicate failure
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      "An error occurred. Please try again.";
    toast.error(errorMessage);
    return false; // Return false to indicate failure
  }
};


