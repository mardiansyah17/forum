'use client'
import React from "react";

import moment from "moment";
import Link from "next/link";
import {FaComment} from "react-icons/fa";
import 'moment/locale/id';
import truncate from "@/libs/truncate";

moment.locale("id");

interface CardForumProps {
    data: ForumInterface
}

export default function CardForum({data}: CardForumProps) {


    return (
        <div className="relative">

            <Link href={`/forums/${data?.slug}`}>
                <div
                    className="p-3 border mb-4 bg-white dark:bg-[#23252E] border-gray-200 dark:border-gray-700 dark:shadow-slate-900  shadow-lg mx-3 rounded-lg">
                    <div className="border-b border-gray-300 pb-3 mb-3">
                        <div className="flex justify-between items-center">
                            {/*judul forum*/}
                            <h1 className="sm:text-lg">
                                {data.title ?? ""}
                            </h1>

                        </div>
                        <small className="mr-4  mb-3 font-extralight">
                            Dibuat oleh <span className="text-indigo-400 font-medium ">{data.user.name}</span>
                        </small>
                        {/*deskripsi singkat forum*/}
                        <p className="text-sm">
                            {truncate(data?.question)}

                        </p>
                    </div>
                    <div className="flex justify-between text-sm">
                        {/* tanggal di buat dengan format jam tanggal bulan tahun  */}
                        {/*{moment(data.createdAt as Date).format('LT, LL')}*/}

                        <div className="flex items-center text-indigo-500">
                            <FaComment/>
                            <span className="ml-2">50</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
