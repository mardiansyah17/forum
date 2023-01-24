import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import CardForum from "../components/CardForum";
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
  function updateForum(id) {
    const resForum = forums.filter((data) => {
      return data.id != id;
    });
    setForums(resForum);
  }
  return (
    <Layout>
      <div className="">
        <Header searchHanler={searchHanler} />
        <div className="mt-5 overflow-y-auto  h-[72vh] sm:h-[82vh] lg:h-[72vh] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-blue-300 px-2">
          {forums.length != 0
            ? forums.map((data, idx) => {
                return <CardForum updateForum={updateForum} key={`forumId.${idx}`} data={data} />;
              })
            : ""}
        </div>
      </div>
    </Layout>
  );
}
