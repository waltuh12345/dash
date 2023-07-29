import { animate, body, isAnimating } from "../data/function";

let themeValue = localStorage.getItem("theme");

const theme = {
  toggle: document.querySelector(".toggleWrapper"),
  input: document.querySelector(".toggleWrapper").querySelector("input"),
  lightTheme(value) {
    const body = document.querySelector("body");
    if (value) {
      body.classList.add("light-theme");
    } else {
      body.classList.remove("light-theme");
    }
  },
};

theme.input.checked = true;

if (themeValue === "light") {
  theme.input.checked = false;
  theme.lightTheme(true);
}

theme.toggle.addEventListener("click", (e) => {
  const { input, lightTheme } = theme;
  if (!input.checked) {
    lightTheme(true);
    localStorage.setItem("theme", "light");
  } else {
    lightTheme(false);
    localStorage.removeItem("theme");
  }

  animate(body, "fadeIn", 500);
});
