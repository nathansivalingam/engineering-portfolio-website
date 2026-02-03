"use client";

import Link from "next/link";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background text-foreground shadow-sm border-b border-border">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 xl:px-60">
        {/* logo */}
        <Link href="/" aria-label="Home">
          <h1 className="text-2xl font-semibold transition-colors duration-300 hover:text-muted-foreground">
            Nathan
          </h1>
        </Link>

        {/* desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Nav />
          <ThemeToggle />
        </div>

        {/* mobile navigation */}
        <div className="flex md:hidden items-center gap-4">
          <Nav mobile={true} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
