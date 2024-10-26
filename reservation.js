let start = document.querySelector(".start");
let end = document.querySelector(".end");
let online = document.querySelector("#online");
let card = document.querySelector("#card");
let btn = document.querySelector("#btn");
let para = document.querySelector("#msg");

btn.addEventListener("click", () => {
  let startValue = start.value.trim();
  let endValue = end.value.trim();
  let isonlineselected = online.checked;
  let iscardselected = card.checked;
  if (
    /^[a-zA-Z]+$/.test(startValue) &&
    /^[a-zA-Z]+$/.test(endValue) &&
    (isonlineselected || iscardselected)
  ) {
    para.innerText = "Booking Successfull !!";
    para.style.color = "darkgreen";
    para.style.position = "relative";
    para.style.top = "70px";
    para.style.fontSize = "18px";
  } else {
    para.innerText = "Booking unsuccessfull !!";
    para.style.color = "crimson";
    para.style.position = "relative";
    para.style.top = "70px";
    para.style.fontSize = "18px";
  }
});

// btn.addEventListener("click",()=>{

// });
