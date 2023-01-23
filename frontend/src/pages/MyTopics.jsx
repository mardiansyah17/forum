import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import CardForum from "../components/CardForum";
import Get from "../utils/Get";
import Cookies from "js-cookie";

export default function MyTopics() {
  const [forums, setForums] = useState([]);
  const token = Cookies.get("token");
  useEffect(() => {
    Get("forums/my-forums", token).then((res) => setForums(res.data));
  }, []);
  return (
    <Layout>
      <Search placeholder={"Cari forum"} />
      <div className="mt-5 overflow-y-auto  h-[72vh] sm:h-[82vh] lg:h-[72vh] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-blue-300 px-2">
        {forums.length != 0
          ? forums.map((data, idx) => {
              return (
                <CardForum
                  key={`forumId.${idx}`}
                  title={data.title}
                  question={data.question}
                  updatedAt={data.updatedAt}
                />
              );
            })
          : ""}
      </div>
    </Layout>
  );
}
