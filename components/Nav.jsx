"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "about", path : "/" },
    { name: "mech eng projects", path: "/me-projects" },
    { name: "cS projects", path: "/cs-projects" },
    { name: "contact", path: "/contact" },
];

const Nav = () => {
    const pathname = usePathname();
    console.log("Current pathname:", pathname);
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-black border-b-2 border-black"} capitalize hover:text-gray-700 transition-all`}>
                    {link.name}
                </Link>
            })}
        </nav>
    );
};

export default Nav;