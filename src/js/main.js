import "../scss/main.scss";
import { animate, body } from "./data/function";
body.style.overflowY = "hidden";
const loading = document.querySelector(".loading");

Promise.all([import("./components/content1"), import("./components/theme")])
  .then(() => {
    return animate(loading, "fadeOut", 800).then(() => {
      loading.style.display = "none";
      body.style.overflowY = "";
    });
  })
  .then(() => console.log("website is loaded"));
