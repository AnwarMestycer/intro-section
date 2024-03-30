function changeLayout() {
  const image = document.getElementById("image");
  const navbar = document.getElementById("navbar");
  const auth = document.getElementById("auth");
  const header = document.getElementById("header");
  
  const imageUrl = "/images/icon-menu.svg";
  let navImage = document.createElement("img");
  navImage.src = imageUrl;

  if (window.matchMedia("(max-width: 600px)").matches) {
    image.src = "/images/image-hero-mobile.png";
    navbar.classList.add("hidden");
    header.replaceChild(navImage, auth);
  } else {
    image.src = "/images/image-hero-desktop.png";
  }
}

window.onload = changeLayout;
window.onresize = changeLayout;
