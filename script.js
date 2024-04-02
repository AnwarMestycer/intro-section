function changeLayout() {
  var sidebar = document.getElementById("sidebar");
  var image = document.getElementById("image");
  var menu = document.getElementById("menu");
  var dropdownI = document.getElementById("dropdownI");
  var dropdownII = document.getElementById("dropdownII");

  if (window.matchMedia("(max-width: 600px)").matches) {
    image.src = "/images/image-hero-mobile.png";
    menu.classList.remove("hidden");
  } else {
    image.src = "/images/image-hero-desktop.png";
    menu.classList.add("hidden");
  }
}

function toggleSidebar() {
  sidebar.classList.remove("-right-[250px]");
  sidebar.classList.add("right-[0]");
  sidebar.classList.add("top-0");
}

window.onload = changeLayout;
window.onresize = changeLayout;
