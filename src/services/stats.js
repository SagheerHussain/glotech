export const createStats = async (statOne, statTwo, statThree, statFour, category) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/stats`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ statOne, statTwo, statThree, statFour, category }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating stats:", error);
        throw error;
    }
};

export const getStatsLists = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/stats`);
        return response.json();
    } catch (error) {
        console.error("Error fetching stats:", error);
        throw error;
    }
};

export const getStatsById = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/stats/get/${id}`);
        return response.json();
    } catch (error) {
        console.error("Error fetching stats:", error);
        throw error;
    }
};

export const updateStats = async (id, statOne, statTwo, statThree, statFour, category) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/stats/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ statOne, statTwo, statThree, statFour, category }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating stats:", error);
        throw error;
    }
};

export const deleteStats = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/stats/delete/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting stats:", error);
        throw error;
    }
};

