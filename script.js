const splitting = () => {
  document.querySelectorAll(".word").forEach((word) => {
    const letters = word.innerText.split("");
    word.innerHTML = null;
    letters.forEach((letter) => {
      word.innerHTML += `<span class="letter">${letter}</span>`;
    });
  });
};
splitting();

document.querySelectorAll(".letter").forEach((span, index) => {
  span.style.setProperty("--i", index);
});

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
