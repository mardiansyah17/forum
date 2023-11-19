import React from "react";
import Link from "next/link";

export default function BottomNavItemLink({title, icon, path, active}: {
    title: string,
    icon: React.ReactNode,
    path: string,
    active: boolean
}) {
    return (
        <Link
            className={`${
                active ? "text-indigo-600" : "dark:text-white"
            } flex flex-col items-center py-4 text-2xl`}
            href={path}
        >
            {icon}
            {/* <span>{title}</span> */}
        </Link>
    );
}
