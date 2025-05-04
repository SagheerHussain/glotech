import axios from "axios";

export const addTestimonial = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/testimonials`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/testimonials`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTestimonialById = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/testimonials/get/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTestimonial = async (id, data) => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/testimonials/update/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTestimonial = async (id) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/testimonials/delete/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
