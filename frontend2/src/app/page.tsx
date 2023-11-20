import FormInput from "@/components/FormInput";

export default function Page() {

    return (
        <div
            className="flex flex-col dark:text-slate-300  px-10  lg:px-[30rem] items-center justify-center h-screen dark:bg-[#161820] ">
            <div className=" relative h-[40%]  flex flex-col justify-end">

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
