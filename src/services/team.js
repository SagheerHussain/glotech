import axios from "axios";

export const createTeam = async (teamData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/teams`, teamData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating team:", error);
        throw error;
    }
};

export const getTeams = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/teams`);
        return response.data;
    } catch (error) {
        console.error("Error fetching teams:", error);
        throw error;
    }
};

export const getTeamById = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/teams/get/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching team by ID:", error);
        throw error;
    }
};

export const updateTeam = async (id, teamData) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/teams/update/${id}`, teamData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating team:", error);
        throw error;
    }
};

export const deleteTeam = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/teams/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting team:", error);
        throw error;
    }
};
