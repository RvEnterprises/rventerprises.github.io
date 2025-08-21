function toggleIsland() {
  const island = document.getElementById("dynamicIsland");
  island.classList.toggle("expanded");
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.checked = true;
  } else if (savedTheme === "light") {
    body.classList.add("light");
    themeToggle.checked = false;
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      body.classList.add("dark");
      themeToggle.checked = true;
    } else {
      body.classList.add("light");
      themeToggle.checked = false;
    }
  }

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  });
});