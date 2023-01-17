import React from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import CardForum from "../components/CardForum";

export default function MyTopics() {
  return (
    <Layout>
      <Search placeholder={"Cari forum"} />
      <div className="mt-5">
        <CardForum
          title={"Perbedaan software enginner"}
          question="Sebenernya apasih perbedaan software enginner dan software developer apakah keduanya sama"
        />
        <CardForum
          title={"Perbedaan software enginner"}
          question="Sebenernya apasih perbedaan software enginner dan software developer apakah keduanya sama"
        />
        <CardForum
          title={"Perbedaan software enginner"}
          question="Sebenernya apasih perbedaan software enginner dan software developer apakah keduanya sama"
        />
      </div>
    </Layout>
  );
}
