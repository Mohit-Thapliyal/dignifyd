// active navbar
let nav = document.querySelector(".custom-nav");
let progressBar = document.getElementById("progress-container");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 40) {
    nav.classList.add("scroll-on");
    progressBar.style.visibility = "visible";
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  } else {
    nav.classList.remove("scroll-on");
    progressBar.style.visibility = "hidden";
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// copyright date generator
var date = new Date();
var year = date.getFullYear();
document.getElementById('copyright').innerHTML = "mohitthapliyal &copy; " + year;