// src/services/apiClient.js
const BASE_URL = "https://hcm202-60hs.onrender.com/api";

export const apiClient = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const defaultOptions = {
    method: "GET",
    headers: {
      "accept": "*/*",
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    return await response.text(); // Hoặc response.json() tùy API
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};