const click_button =()=>{
    console.log("click")

}
document.write("hello")
alert("hello")
const question = prompt("when was javascript created")
document.write("javascript was created in "+question)
const Q = prompt("Who created java")
document.write("java was created "+Q)
const R = prompt("when was amazon created")
document.write("amazon was created by jeff besozs in"+R)
const J = prompt("when was neztcafe created")
document.write("neztcafe was  created in "+J)
const S = prompt("who was the founder javascript")
document.write("it was founded by russians in "+S)
const AA = prompt("When was java created")
const  BB = document.createElement("p")
BB.textContent="hello good morning"+AA
document.body.appendChild(BB)
const  p = document.createElement("p")
p.textContent="hello good morning"
document.body.appendChild(p)
let button_flicker = document.getElementById("flicker")
button_flicker.addEventListener("click",()=>{
    console.log("click")

} )
let decison = document.getElementsByClassName("event")
console.log(decison)