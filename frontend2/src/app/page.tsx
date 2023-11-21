'use client'
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import {SyntheticEvent, useState} from "react";
import instance from "@/libs/instance";
import {setCookie} from 'cookies-next'

export default function Page() {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("")

    const resetError = () => {
        setError("")
        setErrors({
            email: "",
            password: "",
        })
    }

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        await instance.post("/auth/login", form).then((res) => {
            setCookie('token', res.data.token, {maxAge: 60 * 60 * 2})
        }).catch((err) => {
            const {status, data} = err.response

            if (status == 400) {
                const {errors} = data

                for (const key in errors) {
                    setErrors(state => ({...state, [key]: errors[key]}))
                }
            } else if (status == 401) {
                return setError(err.response.data.message)
            }
        })
        setLoading(false)
    }

    return (
        <div
            className="flex flex-col dark:text-slate-300  items-center justify-center h-screen dark:bg-[#161820] ">
            {
                error && <div
                    className="mb-4 rounded-lg bg-red-400 px-6 py-5 text-base text-primary-600"
                    role="alert">
                    {error}
                </div>
            }
            <form onSubmit={submitHandler} className=" relative sm:w-2/4 flex flex-col justify-end">

                <FormInput
                    val={form.email}
                    changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                        resetError()
                    }
                    }
                    name={"email"}
                    type="email"
                    placeholder={"Email"}
                    errMsg={errors.email}
                />
                <FormInput
                    changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                        resetError()
                    }
                    }
                    val={form.password}
                    name={"password"}
                    placeholder={"Password"}
                    type="password"
                    errMsg={errors.password}

                />
                <Button disabled={loading} type={"submit"}>Masuk</Button>
                <div className="flex justify-end w-full">
                    <span className="text-indigo-600">Lupa password?</span>
                </div>

            </form>
        </div>
    );
}
