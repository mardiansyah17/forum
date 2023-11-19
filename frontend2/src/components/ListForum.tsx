'use client'
import {useEffect} from "react";
import {AiOutlineLoading} from "react-icons/ai";
import CardForum from "@/components/CardForum";
import {useForumStore} from "@/store/useForumStore";


export const ListForum = ({dataForums}: { dataForums: ForumInterface[] }) => {

    const {forums, setForums, loading} = useForumStore()

    useEffect(() => {

        setForums(dataForums)
        console.log(forums)
    }, [])
    return (
        <div

            className="mt-5 overflow-y-auto  h-[72vh] sm:h-[82vh] lg:h-[72vh] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-blue-300 px-2">

            {
                loading ? <div className={`flex justify-center items-center mt-4`}>
                        <AiOutlineLoading className={"animate-spin"} size={40}/>
                    </div> :

                    <>

                        {forums?.map((forum, index) => {
                            return <CardForum data={forum} key={index}/>
                        })
                        }
                    </>
            }

        </div>
    );
};