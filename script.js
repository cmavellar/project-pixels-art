// let N = 10;



let colours = document.getElementsByClassName("color");

for (let index = 0; index < colours.length; index +=1) {
  colours[index].addEventListener("click", changeSelectedColor)
} 

let pixels = document.getElementsByClassName("pixel");

for (let index = 0; index < pixels.length; index +=1) {
  pixels[index].addEventListener("click", changeColor)
}
let currentColorSelected = document.getElementsByClassName("selected")[0];

function changeSelectedColor(event) {

    currentColorSelected.classList.remove("selected"); 
    currentColorSelected = event.target;
    currentColorSelected.classList.add("selected");  
    
}


function changeColor (event) {

  const cssObj = window.getComputedStyle(currentColorSelected, null);
  let backgroundColor = cssObj.getPropertyValue("background-color");
  console.log(backgroundColor);

  event.target.style.backgroundColor = backgroundColor;   
}






