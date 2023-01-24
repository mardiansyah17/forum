import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { inputHandler } from "../utils/inputHanlderForm";
import Cookies from "js-cookie";
import axios from "axios";
import Button from "../components/Button";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {}, []);

  function submitHandler() {
    axios.post("http://localhost:3000/api/auth/login", form).then((res) => {
      Cookies.set("token", res.data, { expires: 0.125 });

      return navigate("/");
    });
  }

  return (
    <div className="flex flex-col dark:text-slate-300  px-10  lg:px-[30rem] items-center justify-center h-screen dark:bg-[#161820]">
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
        name={"password"}
        val={form.password}
        placeholder={"Password"}
      />

      <div className="flex justify-end w-full">
        <span className="text-indigo-600">Lupa password?</span>
      </div>
      <Button submitHandler={submitHandler} text={"Login"} />
      <span className="mt-4 ">
        Belum punya akun?{" "}
        <Link to={"/register"} className="text-indigo-600 ">
          Daftar sekarang
        </Link>
      </span>
    </div>
  );
}
