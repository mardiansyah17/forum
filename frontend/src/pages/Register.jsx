import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { inputHandler } from "../utils/inputHanlderForm";
import { data } from "autoprefixer";
import axios from "axios";
import Post from "../utils/Crud/Post";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
  });
  function submitHandler() {
    Post(`auth/register`, form)
      .then((res) =>
        navigate("/login", { state: { message: "Anda berhasil membuat akun silakan daftar" } })
      )
      .catch((err) => {
        err.response.data.errors.forEach((error) => {
          setErrors((data) => ({ ...data, [error.param]: error.msg }));
        });
      });
  }
  return (
    <div className="flex flex-col dark:text-slate-300  px-10  lg:px-[30rem] items-center justify-center h-screen dark:bg-[#161820]">
      <FormInput
        changeHandler={(event) => {
          setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
          setErrors((data) => ({ ...data, email: "" }));
        }}
        name={"email"}
        type="email"
        val={form.email}
        placeholder={"Email"}
        errMsg={errors.email}
      />

      <FormInput
        changeHandler={(event) => {
          setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
          setErrors((data) => ({ ...data, name: "" }));
        }}
        name={"name"}
        val={form.name}
        placeholder={"Nama lengkap"}
        errMsg={errors.name}
      />
      <FormInput
        changeHandler={(event) => {
          setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
          setErrors((data) => ({ ...data, password: "" }));
        }}
        name={"password"}
        val={form.password}
        placeholder={"Password"}
        type="password"
        errMsg={errors.password}
      />
      <FormInput
        changeHandler={(event) => {
          setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
        }}
        name={"confirmPassword"}
        type="password"
        val={form.confirmPassword}
        placeholder={"Konfirmasi password"}
      />

      <button
        onClick={submitHandler}
        className="px-3 py-2 bg-indigo-600 active:bg-indigo-800 hover:bg-indigo-500 rounded-lg mt-4 text-white w-full "
      >
        Buat akun
      </button>
      <span className="mt-4">
        Sudah punya akun?{" "}
        <Link to={"/login"} className="text-indigo-600 ">
          Masuk sekarang
        </Link>
      </span>
    </div>
  );
}
