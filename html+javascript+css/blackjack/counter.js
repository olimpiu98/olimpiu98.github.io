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

saveBtn.innerHTML = `Yesterday was <em>${sessionStorage.getItem("sessionStorage")}</em> pers.`;
