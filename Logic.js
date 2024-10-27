const qno2 = document.getElementById("qn2");
const qno3 = document.getElementById("qn3");
const qno4 = document.getElementById("qn4");
const qno1 = document.getElementById("qn1");

const pic1 = document.getElementsByClassName("exp-img1")[0];
const pic2 = document.getElementsByClassName("exp-img2")[0];
const pic3 = document.getElementsByClassName("exp-img3")[0];
const pic4 = document.getElementsByClassName("exp-img4")[0];



function increaseIndex(element) {
    element.style.zIndex = "90";
}

function decreaseIndex(element) {
    element.style.zIndex = "50";
}


qno2.addEventListener("mouseover", () => increaseIndex(pic2));
qno2.addEventListener("mouseout", () => decreaseIndex(pic2));


qno1.addEventListener("mouseover", () => increaseIndex(pic1));
// qno1.addEventListener("mouseout", () => decreaseIndex(pic1));

qno3.addEventListener("mouseover", () => increaseIndex(pic3));
qno3.addEventListener("mouseout", () => decreaseIndex(pic3));

qno4.addEventListener("mouseover", () => increaseIndex(pic4));
qno4.addEventListener("mouseout", () => decreaseIndex(pic4));
