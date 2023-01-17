import React from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";

function TasgItem({ title }) {
  return <span className="ml-3 mb-3 border border-gray-300 rounded-lg p-2">{title}</span>;
}

export default function Tags() {
  return (
    <Layout>
      <Search placeholder={"Cari tags"} />
      <div className="flex flex-col items-center">
        <div className="mt-5 flex flex-wrap">
          <TasgItem title={"#SoftwareEnginner"} />
          <TasgItem title={"#Html"} />
          <TasgItem title={"#Html"} />
          <TasgItem title={"#Html"} />
          <TasgItem title={"#Html"} />
          <TasgItem title={"#Html"} />
        </div>
      </div>
    </Layout>
  );
}
