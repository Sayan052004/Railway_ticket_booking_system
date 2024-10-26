let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  //   let valid = true;
  let idValue = username.value.trim();
  let passValue = password.value.trim();
  if (/^[a-zA-Z@.]+$/.test(idValue) && /\d/.test(passValue)) {
    alert("Login successfull ");
  } else {
    alert("Login Failed !!");
  }
});
