import axios from "axios";

export default async function Post(url, data, token) {
  return axios.post(`${import.meta.env.VITE_API_URL}${url}`, data, {
    headers: {
      token,
    },
  });
}
