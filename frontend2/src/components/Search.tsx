import React from "react";
import {FaMagnifyingGlass} from "react-icons/fa6";
import instance from "@/libs/instance";
import {useForumStore} from "@/store/useForumStore";

export default function Search({placeholder}: { placeholder: string }) {
    const {setForums, setLoading} = useForumStore()
    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        const {value} = e.target
        await instance.get(`/forums?title=${value}`).then(res => {
            setForums(res.data)
        }).catch(err => {
            console.log(err.response)
        })
        setLoading(false)
    }

    return (
        <div className="flex sm:w-2/4 items-center ">
            <div className={`border-l-indigo-500 border-l-2  p-3 border-y-2 border-y-indigo-500 rounded-l-lg`}>
                <FaMagnifyingGlass className=""/>
            </div>
            <input
                type="text"
                onChange={onChange}
                placeholder={placeholder}
                className="border-2 w-full bg-transparent border-indigo-500 px-3 py-2 rounded-lg rounded-l-none border-l-0 outline-none"
            />
        </div>
    );
}
