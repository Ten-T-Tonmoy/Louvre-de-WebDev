let cards = document.querySelectorAll(".card");
let stackField = document.querySelector(".stackArea");
function rotateShi() {
  let kon = 0;
  cards.forEach((card, index) => {
    if (card.classList.contains("away")) {
      card.style.transform = `translateY(-120vh) rotate(-48deg)`;
    } else {
      card.style.transform = `rotate(${kon}deg)`;
      kon = kon - 10;
      card.style.zIndex = cards.length - index;
      //damn first element z index=4 on top
    }
  });
}

window.addEventListener("scroll", () => {
  let vhDist = window.innerHeight / 2;
  //top viewport to objects top distance
  let topVal = stackField.getBoundingClientRect().top;
  let idx = -1 * (topVal / vhDist + 1);
  //imaginze y axis bottom?
  idx = Math.floor(idx);

  cards.forEach((card, index) => {
    if (index <= idx) {
      card.classList.add("away");
    } else {
      card.classList.remove("away");
    }
  });
  rotateShi();
});

rotateShi();
