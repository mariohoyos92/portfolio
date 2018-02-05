//----------------------- text shadow animation --------------------
const hero = document.querySelector(".landing");
const text = hero.querySelectorAll("h1");
const walk = 25;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round(x / width * walk - walk / 2);
  const yWalk = Math.round(y / height * walk - walk / 2);

  text.forEach(
    header =>
      (header.style.textShadow = `${xWalk}px ${yWalk}px 0 rgb(0, 234, 255)`)
  );
}

hero.addEventListener("mousemove", shadow);

//------------------------ expand about me---------------------
const about = document.querySelector(".about-me");
const headers = about.querySelectorAll("p");

const showInfo = paragraph => {
  let span = paragraph.querySelector("span");
  span.classList.remove("description");
};

const hideInfo = paragraph => {
  let span = paragraph.querySelector("span");
  span.classList.add("description");
};

headers.forEach(p => p.addEventListener("mouseenter", () => showInfo(p)));
headers.forEach(p => p.addEventListener("mouseleave", () => hideInfo(p)));
