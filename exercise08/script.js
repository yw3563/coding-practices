let one = [
  "a house of firework",
  "a house of brick",
  "a house of broken dishes",
  "a house of discarded clothing",
  "a house of dust"
];

let two = [
  "burning",
  "staying",
  "running",
  "fighting",
  "rushing"
];

let three = [
  "in the city",
  "under the sea",
  "on the street",
  "in the forest",
  "above the clouds"
];

function renderPoem() {
  //let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  let element_from_one = one[Math.floor(Math.random() * one.length)];
  let element_from_two = two[Math.floor(Math.random() * two.length)];
  let element_from_three = three[Math.floor(Math.random() * three.length)];
  //grab div from html
  let poem = document.querySelector(".poem");

  //create a new element (paragraph)
  let paragraph = document.createElement("p");
  paragraph.textContent = element_from_one + " " + element_from_two + " " + element_from_three;
  //apend the p to the div
  poem.appendChild(paragraph);
  console.log(`${element_from_one} \n  ${element_from_two}\n  ${element_from_three}`);
}

let btn = document.querySelector("button");
btn.addEventListener("click", renderPoem);
