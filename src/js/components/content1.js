import { content1, content2 } from "../data/content1";
const content1Elem = document.querySelector(".content1-flex");
const content2Elem = document.querySelector(".content2-flex");
let content1Html = "";
let content2Html = "";

content1.forEach((box) => {
  const { icon, user, followers, currentFollowers, status } = box;

  let text = icon === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS";

  content1Html += `
  <li class="animate">
    <div class="content1-flex-box clr-${icon}">
      <section>
        <div class="${icon}"></div>
        <div>${user}</div>
      </section>
      <section>
        <h2>${followers}</h2>
        <div>${text}</div>
      </section>
      <section class="${status}">
        <i></i>
        <div class="box-stats">${currentFollowers}</div>
      </section>
    </div>
  </li>
  `;
});

content2.forEach((box) => {
  const { action, icon, count, percent, status } = box;

  content2Html += `
  <li class="animate">
    <div class="content2-flex-box">


      <section>
        <span>${action}</span>
        <div class="${icon}"></div>
      </section>
      <section>
        <h2>${count}</h2>
        <div class="${status}">
          <i></i>
          <div>${percent}</div>
        </div>
      </section>

    </div>
  </li>
  `;
});

content1Elem.innerHTML = content1Html;
content2Elem.innerHTML = content2Html;

const content1Li = Array.from(content1Elem.children);
const content2Li = Array.from(content1Elem.children);

content1Li.forEach((el) => {
  el.style.opacity = 0;
  el.addEventListener("animationstart", () => {
    el.style.opacity = "";
  });
});

content2Li.forEach((el) => {
  el.style.opacity = 0;
  el.addEventListener("animationstart", () => {
    el.style.opacity = "";
  });
});

const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    element.target.style.opacity = "0";
    if (element.isIntersecting) {
      element.target.classList.add("animated");
    } else {
      element.target.classList.remove("animated");
      element.target.style.opacity = "0";
    }

    element.target.addEventListener("animationstart", (e) => {
      element.target.style.opacity = "1";
    });

    if (window.innerWidth <= 600 && element.isIntersecting) {
      element.target.style.opacity = "1";
    }
  });
});

elements.forEach((el) => {
  observer.observe(el);
});
