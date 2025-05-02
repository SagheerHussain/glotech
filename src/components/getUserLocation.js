import axios from "axios";

const getUserLocation = async () => {
  try {
    const response = await axios.get(``);
    // https://ipinfo.io/json?token=a2938ae7eee99a
    return response.data;
  } catch (error) {
    console.error("Error fetching IP info:", error);
    return null;
  }
};

export default getUserLocation;
