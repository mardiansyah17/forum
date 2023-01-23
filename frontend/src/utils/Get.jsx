import axios from "axios";

export default async function Get(url, token) {
  return await axios.get(`${import.meta.env.VITE_API_URL}${url}`, {
    headers: {
      token,
    },
  });
}
