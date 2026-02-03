"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      return;
    }
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      variant="outline"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="gap-2 border-black/40 dark:border-white/30 cursor-pointer"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </Button>
  );
}
