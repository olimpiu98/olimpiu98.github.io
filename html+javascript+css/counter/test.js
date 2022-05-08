let count = 0;
let countEL = document.getElementById("count-el");
let saveBtn = document.getElementById("save-el");

function increment() {
  count = count + 1;
  countEL.innerText = count;
  sessionStorage.setItem("sessionStorage", count);
}

function save() {
  saveBtn.innerText = "Today was :" + " " + count;
}

saveBtn.innerText =
  "Yesterday was :" + " " + sessionStorage.getItem("sessionStorage");
