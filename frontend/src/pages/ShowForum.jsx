import React from "react";
import Layout from "../components/Layout";
import CardForum from "../components/CardForum";

export default function ShowForum() {
  return (
    <Layout>
      <CardForum key={`22`} title={"data.title"} question={"data.question"} />
    </Layout>
  );
}
