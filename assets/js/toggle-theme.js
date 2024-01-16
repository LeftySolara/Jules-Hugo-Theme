import { setThemeMode } from "./main";

function toggleThemeMode() {
  const currentTheme = localStorage.getItem("current-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setThemeMode(newTheme);
}

const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  toggleButton.onclick = toggleThemeMode;
}
