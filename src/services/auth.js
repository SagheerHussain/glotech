import axios from "axios";

export const loginAccount = async (email, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/login`, {
            email,
            password,
        })
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}