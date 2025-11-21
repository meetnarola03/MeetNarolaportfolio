export const getTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const setTheme = (theme: "light" | "dark") => {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
};

export const toggleTheme = () => {
  const current = getTheme();
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
  return next;
};

export const initTheme = () => {
  const theme = getTheme();
  document.documentElement.classList.toggle("dark", theme === "dark");
};
