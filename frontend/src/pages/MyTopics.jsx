import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import CardForum from "../components/CardForum";
import Get from "../utils/Crud/Get";
import Cookies from "js-cookie";
import getForums from "../utils/getForums";
import { useNavigate } from "react-router-dom";

export default function MyTopics() {
  const [forums, setForums] = useState([]);
  const token = Cookies.get("token");
  const navigate = useNavigate();

  function updateForum(id) {
    const resForum = forums.filter((data) => {
      return data.id != id;
    });
    setForums(resForum);
  }
  useEffect(() => {
    if (!token) {
      return navigate("/login", { relative: "path", replace: true });
    }
    Get("forums/my-forums", token).then((res) => setForums(res.data));
  }, []);
  function searchHanler(event) {
    try {
      let val = event.target.value;
      getForums().then((res) => {
        let resForums = res.filter((data) => {
          return data.title.toLowerCase().includes(val.toLowerCase());
        });
        setForums(resForums);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <Search onChange={searchHanler} placeholder={"Cari forum"} />
      <div className="mt-5 overflow-y-auto  h-[72vh] sm:h-[82vh] lg:h-[72vh] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-blue-300 px-2">
        {forums.length != 0
          ? forums.map((data, idx) => {
              return <CardForum updateForum={updateForum} key={`forumId.${idx}`} data={data} />;
            })
          : ""}
      </div>
    </Layout>
  );
}
