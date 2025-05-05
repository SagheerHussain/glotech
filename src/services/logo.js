import axios from "axios";

export const createLogo = async (logo) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/logo`, logo);
        return response.data;
    } catch (error) {
        console.error("Error creating logo:", error);
    }
};

export const getLogo = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/logo`);
        return response.data;
    } catch (error) {
        console.error("Error fetching logo:", error);
    }
};

export const getLogoById = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/logo/get/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching logo by ID:", error);
    }
};

export const updateLogo = async (id, formData) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/logo/update/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating logo:", error);
    }
};

export const deleteLogo = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/logo/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting logo:", error);
    }
};
