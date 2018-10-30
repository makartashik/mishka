var pageHeader = document.querySelector(".page-header");
var navToggle = document.querySelector(".page-header__nav-toggle");

var button = document.querySelectorAll(".button--open-modal");
var modal = document.querySelector(".modal");
var wrap = document.querySelector(".modal-wrap");
var overlay = document.querySelector(".modal-overlay");

pageHeader.classList.remove("page-header--nojs");

navToggle.addEventListener("click", function() {
  if (pageHeader.classList.contains("page-header--closed")) {
    pageHeader.classList.remove("page-header--closed");
    pageHeader.classList.add("page-header--opened");
  } else {
    pageHeader.classList.add("page-header--closed");
    pageHeader.classList.remove("page-header--opened");
  }
});

for(var i=0;i<button.length;i++) {
  button[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
    wrap.classList.add("modal-wrap--show");
    overlay.classList.add("modal-overlay--show");
  });
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
      }
      if (wrap.classList.contains("modal-wrap--show")) {
        wrap.classList.remove("modal-wrap--show");
      }
      if (overlay.classList.contains("modal-overlay--show")) {
        overlay.classList.remove("modal-overlay--show");
      }
    }
  });

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
  wrap.classList.remove("modal-wrap--show");
  overlay.classList.remove("modal-overlay--show");
});
