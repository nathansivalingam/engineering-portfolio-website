import Link from "next/link";
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // example icons

// components
import Nav from "./Nav";

const Header = () => {
  // Define your mobile links with icons
  const mobileLinks = [
    { href: "/", icon: <FaHome />, label: "Home" },
    { href: "/about", icon: <FaUserAlt />, label: "About" },
    { href: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { href: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 xl:px-60">
        
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold transition-colors duration-300 hover:text-gray-700">
            Nathan
          </h1>
        </Link>

        {/* desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Nav />
        </div>

        {/* mobile navigation */}
        <div className="flex md:hidden items-center gap-4">
          {mobileLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-label={link.label} className="text-xl text-gray-700 hover:text-gray-900 transition-colors">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
