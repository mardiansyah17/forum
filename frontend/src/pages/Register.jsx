import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { inputHandler } from "../utils/inputHanlderForm";
import { data } from "autoprefixer";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  function submitHandler() {
    axios
      .post("http://localhost:3000/api/auth/register", form)
      .then((res) =>
        navigate("/login", { state: { message: "Anda berhasil membuat akun silakan daftar" } })
      );
  }

  return (
    <div className="flex flex-col px-10 items-center justify-center h-screen ">
      <FormInput
        changeHandler={(event) => {
          setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
        }}
        name={"email"}
        type="email"
        val={form.email}
        placeholder={"Email"}
      />
      <FormInput
        changeHandler={(event) => {
          setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
        }}
        name={"name"}
        val={form.name}
        placeholder={"Nama lengkap"}
      />
      <FormInput
        changeHandler={(event) => {
          setForm((data) => ({ ...data, [inputHandler(event).name]: inputHandler(event).value }));
        }}
        name={"password"}
        val={form.password}
        placeholder={"Password"}
        type="password"
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
