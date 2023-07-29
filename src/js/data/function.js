import "animate.css";
const body = document.querySelector("body");
let isAnimating = false;

const animate = (elem, name, duration = "800") => {
  return new Promise((resolve, reject) => {
    if (isAnimating) return;
    elem.style.animation = `${name} ${duration}ms`;
    isAnimating = true;

    function handleAnimation(e) {
      e.stopPropagation();
      elem.style.animation = "";
      isAnimating = false;
      resolve("animationend");
    }

    elem.addEventListener("animationend", handleAnimation, { once: true });
  });
};

export { animate, isAnimating, body };
