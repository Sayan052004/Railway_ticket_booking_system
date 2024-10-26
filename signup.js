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
    output.style.color = "green"; // Set success color
  } else {
    output.innerText = "Registration Failed!!";
    output.style.color = "red"; // Set failure color
    output.style.position = "relative";
    output.style.left = "0px"; // Adjust position if needed
  }
});

let checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("click", function () {
  let show = pass;
  if ((show.type === "password")) {
    show.type = "text";
  } else {
    show.type = "password";
  }
});
