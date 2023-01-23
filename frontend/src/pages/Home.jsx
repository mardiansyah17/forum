import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TopNav from "../components/TopNav";
import Header from "../components/Header";
import CardForum from "../components/CardForum";
import SideBar from "../components/SideBar";
import axios from "axios";
import getForums from "../utils/getForums";

export default function Home() {
  const [forums, setForums] = useState([]);
  useEffect(() => {
    getForums().then((res) => setForums(res));
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
      <div className="">
        <Header searchHanler={searchHanler} />
        <div className="mt-5 overflow-y-auto  h-[72vh] sm:h-[82vh] lg:h-[72vh] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-blue-300 px-2">
          {forums.length != 0
            ? forums.map((data, idx) => {
                return (
                  <CardForum
                    key={`forumId.${idx}`}
                    id={data.id}
                    title={data.title}
                    question={data.question}
                    updatedAt={data.updatedAt}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </Layout>
  );
}
