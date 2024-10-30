"use client";

import { useEffect, useState } from "react";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

interface ThemeToggleProps {}

function isDarkTheme() {
  return (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export default function ThemeToggle({}: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(isDarkTheme);

  const onToggle = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-20 w-20 text-zinc-600 dark:text-zinc-400" />
      ) : (
        <Moon className="h-20 w-20 text-zinc-600 dark:text-zinc-400" />
      )}
    </button>
  );
}
