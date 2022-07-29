"use strict";
// pop-up
//variable declarations
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//for opening the pop-up
const openModel = function () {
  console.log("Button is clicked");
  //another way of implementing same thing
  // overlay.style.display='block';
  // model.style.display='block';
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//for closing the popup
const closeModel = function () {
  console.log("model is closed");
  //another way of implementing same thing
  // overlay.style.display='none';
  // modal.style.display='none';
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//On button click

btnsOpenModal.addEventListener("click", openModel);

btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModel();
    console.log("escape is pressed");
  }
});
