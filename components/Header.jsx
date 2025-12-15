"use client";

import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
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
          <Nav mobile={true} />
        </div>

      </div>
    </header>
  );
};

export default Header;
