import axios from "axios";

export default async function Update(url, data, token) {
  return await axios.put(`${import.meta.env.VITE_API_URL}${url}`, data, {
    headers: {
      token,
    },
  });
}
