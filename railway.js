let sidebar = document.querySelector(".sidebar");
let hide = document.querySelector("#hide");
let menu = document.querySelector("#menu");

// Ensure the sidebar is initially hidden
sidebar.style.opacity = "0";
sidebar.style.transition = "opacity 300ms ease";

menu.addEventListener("click", function () {
  sidebar.style.display = "flex";
  setTimeout(() => {
    sidebar.style.opacity = "1"; // Show the sidebar with transition
  }, 10); // Delay to allow the transition to take effect
});

hide.addEventListener("click", function () {
  sidebar.style.opacity = "0"; // Hide the sidebar with transition
  setTimeout(() => {
    sidebar.style.display = "none"; // Hide after transition completes
  }, 300); // Match the transition duration
});

let id = document.querySelector(".email-input");
let pass = document.querySelector(".password-input");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");

btn.addEventListener("click", function () {
  // Check if the email input contains only alphabetic characters
  let idValue = id.value.trim();
  let passValue = pass.value.trim();

  // Check if the id contains only alphabetic characters and password contains at least one digit
  if (/^[a-zA-Z@.]+$/.test(idValue) && /\d/.test(passValue)) {
    // /\d/ ensures the password contains at least one digit.
    //The regular expression /^[a-zA-Z@._-]+$/ allows alphabetic characters (a-z, A-Z) and the special characters @, ., _, and -.
    output.innerText = "Registered Successfully :)";
    output.style.color = "darkgreen"; // Set success color
  } else {
    output.innerText = "Registration Failed!!";
    output.style.color = "red"; // Set failure color
    output.style.position = "relative";
    output.style.left = "0px"; // Adjust position if needed
  }
});

let book = document.querySelector("#sign");
let booking = document.querySelector(".booking");
let nav = document.querySelector(".nav");
let details = document.querySelector(".details");
let Check = 0;
book.addEventListener("click", function () {
  if (Check === 0) {
    booking.style.display = "flex";
    nav.style.opacity = "0.8";
    Check = 1;
  } else {
    booking.style.display = "none";
    nav.style.opacity = "1";
    Check = 0;
  }
});
