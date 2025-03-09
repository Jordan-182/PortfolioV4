/* Function used to split letters of a word in order to style them one by one */

const splitting = () => {
  document.querySelectorAll(".split").forEach((split) => {
    const letters = split.innerText.split("");
    split.innerHTML = null;
    letters.forEach((letter) => {
      split.innerHTML += `<span class="letter">${letter}</span>`;
    });
  });
};
splitting();

document.querySelectorAll(".letter").forEach((span, index) => {
  span.style.setProperty("--i", index);
});

/* Code used to add a smooth scroll to the nav links */

document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  });
});
