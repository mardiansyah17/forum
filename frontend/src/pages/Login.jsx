import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FormInput from "../components/FormInput";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  useEffect(() => {
    console.log(location.state);
  }, []);

  return (
    <div className="flex flex-col px-10 items-center justify-center h-screen ">
      <FormInput name={"email"} type="email" val={form.email} placeholder={"Email"} />
      <FormInput name={"password"} val={form.password} placeholder={"Password"} />

      <div className="flex justify-end w-full">
        <span className="text-indigo-600">Lupa password?</span>
      </div>
      <button className="px-3 py-2 bg-indigo-600 active:bg-indigo-800 hover:bg-indigo-500 rounded-lg mt-4 text-white w-full ">
        Login
      </button>
      <span className="mt-4">
        Belum punya akun?{" "}
        <Link to={"/register"} className="text-indigo-600 ">
          Daftar sekarang
        </Link>
      </span>
    </div>
  );
}
