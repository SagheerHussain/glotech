export const createColorTheme = async (colorTheme) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/colors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(colorTheme),
        });
        return response.json();
    } catch (error) {
        console.error("Error creating color theme:", error);
        throw error;
    }    
};

export const getColors = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/colors`);
        return response.json();
    } catch (error) {
        console.error("Error fetching colors:", error);
        throw error;
    }
};

export const getColor = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/colors/get/${id}`);
        return response.json();
    } catch (error) {
        console.error("Error fetching color:", error);
        throw error;
    }
};

export const updateColor = async (id, colorTheme) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/colors/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(colorTheme),
        });
        return response.json();
    } catch (error) {
        console.error("Error updating color:", error);
        throw error;
    }
};

export const deleteColor = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/colors/delete/${id}`, {
            method: "DELETE",
        });
        return response.json();
    } catch (error) {
        console.error("Error deleting color:", error);
        throw error;
    }
};
