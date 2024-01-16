export function setThemeMode(currentTheme) {
  document.body.className = `${currentTheme}-theme`;
  localStorage.setItem("current-theme", `${currentTheme}`);
}

setThemeMode(localStorage.getItem("current-theme") || "light");
