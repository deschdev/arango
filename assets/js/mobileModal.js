export const mobileModal = () => {
  const modalOpen = document.querySelector("#openMobileNav");
  const modalClose = document.querySelector(".close");
  const nav = document.querySelector("nav");
  const overlay = document.querySelector(".mobile-overlay");

  const toggleNav = () => {
    nav.classList.toggle("hide");
    overlay.classList.toggle("hide");
  }

  const closeMobileNav = () => {
    nav.classList.add("hide");
    overlay.classList.add("hide");
  }

  modalOpen.addEventListener("click", toggleNav);
  modalClose.addEventListener("click", closeMobileNav);
  overlay.addEventListener("click", closeMobileNav);
}