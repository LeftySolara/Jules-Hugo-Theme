let currentTheme = "light";

function toggleThemeMode() {
  if (currentTheme == "light") {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }

  document.body.className = `${currentTheme}-theme`;
}

const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  toggleButton.onclick = toggleThemeMode;
}
