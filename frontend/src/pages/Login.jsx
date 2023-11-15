import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import FormInput from "../components/FormInput";
import {inputHandler} from "../utils/inputHanlderForm";
import Cookies from "js-cookie";
import axios from "axios";
import Button from "../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [errMessage, setErrMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
    }, []);

    function submitHandler() {
        axios
            .post("https://forum.ti-bidar.com/api/auth/login", form)
            .then((res) => {
                Cookies.set("token", res.data, {expires: 0.125});

                return navigate("/");
            })
            .catch((err) => {
                setErrMessage(err.response.data.message);
            });
    }

    return (
        <div
            className="flex flex-col dark:text-slate-300  px-10  lg:px-[30rem] items-center justify-center h-screen dark:bg-[#161820] ">
            <div className=" relative h-[40%]  flex flex-col justify-end">
                {errMessage ? (
                    <div className="bg-indigo-700  mb-4 w-full p-3 rounded-lg bg-opacity-10 absolute top-6">
                        <FontAwesomeIcon icon={faCircleExclamation} className="text-red-500 mr-4"/>
                        <span className="text-red-500">Email atau kata sandi salah</span>
                    </div>
                ) : (
                    ""
                )}
                <FormInput
                    changeHandler={(event) => {
                        setForm((data) => ({...data, [inputHandler(event).name]: inputHandler(event).value}));
                    }}
                    name={"email"}
                    type="email"
                    val={form.email}
                    placeholder={"Email"}
                />
                <FormInput
                    changeHandler={(event) => {
                        setForm((data) => ({...data, [inputHandler(event).name]: inputHandler(event).value}));
                    }}
                    name={"password"}
                    val={form.password}
                    placeholder={"Password"}
                    type="password"
                />

                <div className="flex justify-end w-full">
                    <span className="text-indigo-600">Lupa password?</span>
                </div>
                <Button submitHandler={submitHandler} text={"Login"}/>
                <span className="mt-4 ">
          Belum punya akun?{" "}
                    <Link to={"/register"} className="text-indigo-600 ">
            Daftar sekarang
          </Link>
        </span>
            </div>
        </div>
    );
}
