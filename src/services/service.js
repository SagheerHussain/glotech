export const createService = async (formData) => {
    try {
        console.log("formData", formData);
        const { data } = await fetch(`${import.meta.env.VITE_BASE_URL}/api/service`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};