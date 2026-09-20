const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector("#menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const expanded = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(expanded));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const toggleHeaderState = () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("scrolled", window.scrollY > 18);
};

toggleHeaderState();
window.addEventListener("scroll", toggleHeaderState, { passive: true });

const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}