let one = [
  "a house of wood",
  "a house of brick",
  "a house of broken dishes",
  "a house of discarded clothing",
  "a house of dust"
];

let two = [
  "in the city",
  "lies under the sea",
  "on the street",
  "in the forest",
  "above the clouds"
];

function renderPoem() {
  //let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  let element_from_one = one[Math.floor(Math.random() * one.length)];
  //console.log(element_from_one);

  let element_from_two = two[Math.floor(Math.random() * two.length)];
  //console.log(element_from_two);

  //grab div from html
  let poem = document.querySelector(".poem");
  //poem.textContent = element_from_one + "" + element_from_two;

  //create a new element (paragraph)
  let paragraph = document.createElement("p");
  paragraph.textContent = element_from_one + "" + element_from_two;
  //apend the p to the div
  poem.appendChild(paragraph);

  //console.log(element_from_one + " \n" + element_from_two);
  console.log(`${element_from_one} \n  ${element_from_two}`);
}

let btn = document.querySelector("button");
btn.addEventListener("click", renderPoem);
