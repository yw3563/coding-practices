let age = 70
let height = 5

if (age < 8) {
  console.log("Check out the Merry-G0-Around. You will love it.")
}else if(age > 8 && age < 65 && height > 4.5){
  console.log("Check out the Roller Coaster. It's awesome!")
}else{
  console.log("Why not enjoy a float down the Lazy River?")
}

let noun = ["food", "cat", "dog", "book", "bed"]
let adjective = ["happily", "sadly",  "fortunately", "slowly", "friendly"]
let verb = ["see", "crush", "touch", "create", "draw"]

let randomNoun = noun[Math.floor(Math.random()*noun.length)]
let randomAdjective = adjective[Math.floor(Math.random()*adjective.length)]
let randomVerb = verb[Math.floor(Math.random()*verb.length)]
//string templating
let sentence = `My ${randomNoun} leaps ${randomAdjective} when I ${randomVerb} a rainbow in the sky:`
//concatenation
//let sentence = 'My' + noun + 'leaps' + adjective +' when I' + verb + 'a rainbow in the sky'
console.log(sentence)

document.getElementById("demo").innerHTML=sentence;
