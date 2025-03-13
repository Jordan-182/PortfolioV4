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
