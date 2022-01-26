const d =document.getElementsByTagName("h1")
for(let i = 0; i < d.length;i++){
    d[i].textContent="hello what are you doing"
}
d[4].textContent="hell ma"
const k = document.getElementsByTagName("p")
const para = document.createElement('p')
para.textContent="tgers"
d[6].appendChild(para)
const ure = document.getElementsByTagName("img")
ure[0].setAttribute("src","https://m.economictimes.com/thumb/msid-88747523,width-1600,height-1067,resizemode-4,imgsize-141482/dogecoin.jpg")
const dropdownElement = document.getElementsByTagName("select")
const cars = ["toyota","camry","honda","nissan","ford","benzs","bmw",]
for ( car of cars) {
   const optionElemnt =document.createElement("option")
   optionElemnt.setAttribute("value",car)
   optionElemnt.textContent= car
   dropdownElement[0].appendChild(optionElemnt)
}