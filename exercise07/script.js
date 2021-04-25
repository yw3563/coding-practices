// 1 -- Select each circle
let graybutton = document.getElementById("grayButton");
let whitebutton = document.getElementById("whiteButton");
let bluebutton = document.getElementById("blueButton");
let yellowbutton = document.getElementById("yellowButton");

let body = document.querySelector("body");
// 2 -- Add an event listener to each circle
graybutton.addEventListener("click", grey);
whitebutton.addEventListener("click", white);
bluebutton.addEventListener("click", blue);
yellowbutton.addEventListener("click", yellow);

// 3 -- Write an event handler to change the color of the page when each circle is pressed.
function grey() {
  console.log("gray button");
  body.style.backgroundColor = "gray";
  // body.classList.add("gray");
}
function white() {
  console.log("white button");
  body.style.backgroundColor = "white";
}
function blue() {
  console.log("blue button");
  body.style.backgroundColor = "blue";
}
function yellow() {
  console.log("yellow button");
  body.style.backgroundColor = "yellow";
}
