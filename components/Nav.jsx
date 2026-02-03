"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserAlt, FaTools, FaLaptopCode, FaPhoneAlt } from "react-icons/fa";

const links = [
  { name: "about", path: "/", mobileIcon: <FaUserAlt /> },
  { name: "mech eng projects", path: "/me-projects", mobileIcon: <FaTools /> },
  { name: "cS projects", path: "/cs-projects", mobileIcon: <FaLaptopCode /> },
  { name: "contact", path: "/contact", mobileIcon: <FaPhoneAlt /> },
];

const Nav = ({ mobile = false }) => {
  const pathname = usePathname();

  return (
    <nav className={`flex ${mobile ? "gap-6 text-2xl" : "gap-8"}`}>
      {links.map((link, index) => {
        const isActive = link.path === pathname;

        // Active: use theme "primary" color
        // Inactive: muted, becomes foreground on hover
        const colorClass = isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground";

        // Bottom border for desktop active state
        const underlineClass = !mobile && isActive ? "border-b-2 border-primary" : "border-b-2 border-transparent";

        return (
          <Link
            key={index}
            href={link.path}
            aria-label={link.name}
            className={`
              capitalize transition-colors duration-300
              flex items-center justify-center
              ${colorClass}
              ${underlineClass}
            `}
          >
            {mobile ? link.mobileIcon : link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
