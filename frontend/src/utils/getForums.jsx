import axios from "axios";

export default async function getForums() {
    const res = await axios.get("https://forum.ti-bidar.com/api/forums");
    return res.data;
}
