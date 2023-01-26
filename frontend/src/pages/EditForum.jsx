import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useState } from "react";
import { inputHandler } from "../utils/inputHanlderForm";
import axios from "axios";
import Get from "../utils/Crud/Get";
import Update from "../utils/Crud/Update";
export default function EditForum() {
  const [form, setForm] = useState({
    title: "",
    question: "",
  });
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    Get(`forums/${id}`, token).then((res) =>
      setForm({ title: res.data.title, question: res.data.question })
    );
  }, []);
  const submitHandler = () => {
    Update(`forums/${id}`, form, token).then((res) => navigate(`/forum/${id}`));
  };

  return (
    <Layout>
      <div className="mx-5">
        <FormInput
          changeHandler={(event) => {
            setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
          }}
          val={form.title}
          name={"title"}
          type="text"
          placeholder={"Judul forum"}
        />
        <textarea
          value={form.question}
          onChange={(event) => {
            setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
          }}
          name={"question"}
          className="border-2 w-full bg-transparent border-indigo-500 px-3 py-2 rounded-lg outline-none mb-4"
          id=""
          rows="5"
          placeholder="Isi forum"
        ></textarea>
        <Button submitHandler={submitHandler} text={"Submit"} />
      </div>
    </Layout>
  );
}
