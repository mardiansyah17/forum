import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faGears, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import imgProfile from "/public/user-profile.png";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { inputHandler } from "../utils/inputHanlderForm";
import axios from "axios";
export default function Profil() {
  const [isDark, setIsDark] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState(Cookies.get("token"));
  useEffect(() => {
    let darkVal = localStorage.getItem("is_dark");
    if (!darkVal) {
      setIsDark(false);
    } else {
      darkVal === "true" ? setIsDark(true) : setIsDark(false);
    }
  }, [token]);

  function submitHandler() {
    axios.post("http://localhost:3000/api/auth/login", form).then((res) => {
      Cookies.set("token", res.data, { expires: 0.125 });
      setToken(res.data);
    });
  }
  if (!token) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center  dark:text-slate-300  px-10  lg:px-[18rem] h-screen dark:bg-[#161820]">
          <FormInput
            changeHandler={(event) => {
              setForm((data) => ({
                ...data,
                [inputHandler(event).name]: inputHandler(event).value,
              }));
            }}
            name={"email"}
            type="email"
            val={form.email}
            placeholder={"Email"}
          />
          <FormInput
            changeHandler={(event) => {
              setForm((data) => ({
                ...data,
                [inputHandler(event).name]: inputHandler(event).value,
              }));
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
      </Layout>
    );
  } else {
    return (
      <Layout>
        <FontAwesomeIcon icon={faGears} className="text-xl absolute top-0 right-0 px-8 pt-5" />
        <div className="flex flex-col items-center">
          <img src={imgProfile} alt="" className="w-20 mb-2" />
          <h1 className="text-lg mt-3">Muhammad Mardiansyah</h1>
          <span>Fullstack developer</span>
        </div>
        <div className="sm:w-2/3 sm:mt-14 sm:mx-auto">
          <div className="flex justify-between px-5  mt-5 text-lg items-center">
            <span>Dark Mode</span>
            <input
              onChange={(val) => {
                let check = val.target.checked;
                let classDark = document.documentElement.classList;
                setIsDark(check);
                check ? classDark.add("dark") : classDark.remove("dark");
                localStorage.setItem("is_dark", check);
              }}
              type="checkbox"
              className="toggle toggle-primary"
              checked={isDark}
            />
          </div>
          <div className="flex justify-between px-5  mt-5 text-lg items-center">
            <span>Keluar</span>
            <FontAwesomeIcon
              onClick={() => {
                Cookies.remove("token");
                setToken(undefined);
              }}
              icon={faArrowRightToBracket}
              size="xl mr-3"
            />
          </div>
        </div>
      </Layout>
    );
  }
}
