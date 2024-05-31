const modalOpen = document.querySelector("#openMobileNav");

const toggleNav = () => {
  const nav = document.querySelector("nav");
    nav.classList.toggle("hide");
}

modalOpen.addEventListener("click", toggleNav);