export const getOverallStats = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/overallStats`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching overall stats:", error);
    throw error;
  }
};

export const getOverallStatsById = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/overallStats/get/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching overall stats:", error);
    throw error;
  }
};

export const updateOverallStats = async (id, projectsDelivered, clients, divisions, awards) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/overallStats/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectsDelivered, clients, divisions, awards }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating overall stats:", error);
    throw error;
  }
};

export const deleteOverallStats = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/overallStats/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    return response.json();
  } catch (error) {
    console.error("Error deleting overall stats:", error);
    throw error;
  }
};
