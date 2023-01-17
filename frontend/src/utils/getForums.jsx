import axios from "axios";

export default async function getForums() {
  const res = await axios.get("http://localhost:3000/api/forums");
  return res.data;
}
