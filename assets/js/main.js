/**
 * Set the icon and color for the theme toggle button.
 */
export function setThemeToggleButton(currentTheme) {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (!themeToggleButton) {
    return;
  }

  icon = currentTheme == "light" ? "basil:sun-solid" : "basil:moon-solid";

  themeToggleButton.className = `theme-toggle-${currentTheme}`;
  themeToggleButton.setAttribute("icon", icon);
}

export function setThemeMode(currentTheme) {
  if (document.body) {
    document.body.className = `${currentTheme}-theme`;
  }
  setThemeToggleButton(currentTheme);
  localStorage.setItem("current-theme", `${currentTheme}`);
}

setThemeMode(localStorage.getItem("current-theme") || "light");
