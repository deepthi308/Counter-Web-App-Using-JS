//Getiing the elements by its id
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");
const counter = document.getElementById("count");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++
  if (count > 0) {
    counter.style.color = "#00f000";
  }
  else if (count < 0) {
    counter.style.color = "#f00000";
  }
  else {
    counter.style.color = "#f58300";
  }
  counter.innerHTML = count;

})

resetBtn.onclick = () => {
  count = 0;
  if (count > 0) {
    counter.style.color = "#00f000";
  }
  else if (count < 0) {
    counter.style.color = "#f00000";
  }
  else {
    counter.style.color = "#f58300";
  }
  counter.innerHTML = count;
}
decreaseBtn.onclick = () => {
  count--
  if (count > 0) {
    counter.style.color = "#00f000";
  }
  else if (count < 0) {
    counter.style.color = "#f00000";
  }
  else {
    counter.style.color = "#f58300";
  }
  counter.innerHTML = count;
}

// if (count > 0) {
//   counter.style.color = "green";
// }
// else if (count < 0) {
//   counter.style.color = "red";
// }
// else {
//   counter.style.color = "yellow";
// }
