export const getAboutLists = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/about`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching about lists:", error);
    }
};

export const getAbout = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/about/get/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching about:", error);
    }
};
    
export const addAbout = async (about) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/about`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(about),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding about:", error);
    }
};

export const updateAbout = async (id, about) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/about/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(about),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating about:", error);
    }
};

export const deleteAbout = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/about/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting about:", error);
    }
};
