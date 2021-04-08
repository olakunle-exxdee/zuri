const list = document.querySelector(".list");
const menu = document.querySelector(".menu");

let closeMenu = false;

menu.addEventListener("click", () => {
  if (!closeMenu) {
    list.classList.add("open");
    closeMenu = true;
  } else {
    list.classList.remove("open");
    closeMenu = false;
  }
});
