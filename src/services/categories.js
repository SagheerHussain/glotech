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

export const addCategory = async (category) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding category:", error);
    }
}

export const updateCategory = async (id, category) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        });
        const data = await response.json();
        return data;
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
