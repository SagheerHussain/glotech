import axios from "axios";

export const getTechnologies = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/technology`);
        return response.data;
    } catch (error) {
        console.error("Error fetching technologies:", error);
        throw error;
    }
};

export const getTechnologyById = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/technology/get/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching technology by ID:", error);
        throw error;
    }
};

export const getTechnologiesByCategory = async (category) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/technology/category/${category}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching technologies by category:", error);
        throw error;
    }
};

export const createTechnology = async (formData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/technology`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating technology:", error);
        throw error;
    }
};

export const updateTechnology = async (id, formData) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/technology/update/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating technology:", error);
        throw error;
    }
};

export const deleteTechnology = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/technology/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting technology:", error);
        throw error;
    }
};