"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserAlt, FaCog, FaLaptopCode, FaPhoneAlt } from "react-icons/fa";

const links = [
  { name: "about", path: "/", mobileIcon: <FaUserAlt /> },
  { name: "mech eng projects", path: "/me-projects", mobileIcon: <FaCog /> },
  { name: "cS projects", path: "/cs-projects", mobileIcon: <FaLaptopCode /> },
  { name: "contact", path: "/contact", mobileIcon: <FaPhoneAlt /> },
];

const Nav = ({ mobile = false }) => {
  const pathname = usePathname();

  return (
    <nav className={`flex ${mobile ? "gap-6 text-2xl" : "gap-8"}`}>
      {links.map((link, index) => {
        const isActive = link.path === pathname;

        // Determine color classes
        const colorClass = isActive ? "text-black" : "text-gray-700 hover:text-gray-900";

        return (
          <Link
            key={index}
            href={link.path}
            aria-label={link.name}
            className={`capitalize transition-colors duration-300 flex items-center justify-center
                        ${!mobile && isActive ? "border-b-2 border-black" : ""} ${colorClass}`}
          >
            {mobile ? link.mobileIcon : link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;