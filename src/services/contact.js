import axios from "axios";

export const createContact = async (location_en, location_ar, location_fr, email, phone) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/contact`,
      { location_en, location_ar, location_fr, email, phone }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
};

export const getContacts = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/contact`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const getContactById = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/contact/get/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching contact by ID:", error);
    throw error;
  }
};

export const updateContact = async (id, location_en, location_ar, location_fr, email, phone) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/api/contact/update/${id}`,
      { location_en, location_ar, location_fr, email, phone }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating contact:", error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/contact/delete/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};

