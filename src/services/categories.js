import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

export const getCategory = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/get/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching category:", error);
    }
}

export const getCategoryBySlug = async (slug) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/slug/${slug}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching category by slug:", error);
    }
}

export const addCategory = async (category) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/category`, category, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error adding category:", error);
    }
}

export const updateCategory = async (id, category) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/category/update/${id}`, category, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating category:", error);
    }
}

export const deleteCategory = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/delete/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting category:", error);
    }
}
