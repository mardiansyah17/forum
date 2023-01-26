import axios from "axios";

export default async function Delete(url, token) {
  return await axios.delete(`${import.meta.env.VITE_API_URL}${url}`, {
    headers: {
      token,
    },
  });
}
