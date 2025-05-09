import axios from "axios";

export const createService = async (formData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/service`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getService = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/service/get/${id}`, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getServices = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/service`, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getServiceByCategory = async (category) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/service/category/${category}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateService = async (id, formData) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/service/update/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteService = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/service/delete/${id}`, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
