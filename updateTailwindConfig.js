const axios = require("axios");
const fs = require("fs");
const path = require("path");

export const updateColors = async () => {
  try {
    // Fetch colors from the API (replace the URL with your actual API endpoint)
    const response = await axios.get(`${process.env.VITE_BASE_URL}/api/colors`);
    const colors = response.data[0]; // Assuming the API returns an array with color data

    return colors;
  } catch (error) {
    console.error("Error updating colors:", error);
  }
}
