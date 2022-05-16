let count = 0;
let countEL = document.getElementById("count-el2");
let saveBtn = document.getElementById("save-el2");

function increment() {
    count = count + 1;
    countEL.innerText = count;
    sessionStorage.setItem("sessionStorage", count);
}

function save() {
    saveBtn.innerHTML = `Today was <em>${count}</em> pers.`;
}

let store = sessionStorage.getItem("sessionStorage")

if (store > 0) {
    saveBtn.innerHTML = `Yesterday was <em>${store}</em> pers.`;
} else {
    saveBtn.innerHTML = `No register`;
}