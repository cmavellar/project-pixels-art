let divList = document.getElementById("pixel-board"); //div que dará origem a outras ul/li

let inputBoardSize = document.getElementById("board-size"); // input de criacao de mais pixels

let buttonVQV = document.getElementById("generate-board"); // botao
buttonVQV.addEventListener("click", createInputPixelSquare)

let N = 5;
// createPixelSquare(); 

function createInputPixelSquare () {
  let inputValue  = inputBoardSize.value;

  if (inputValue == 0) {
    alert('Board inválido!');
  }
  else { 
    N = inputValue; 
    if (inputValue < 5) {
      N = 5;
    }
    if (inputValue > 50) {
      N = 50;
    }    
    divList.innerHTML = ""; 
    createPixelSquare ();
  }
} 

function createPixelSquare () {
  for (let index=0; index < N; index +=1) {    
    let lineUl = document.createElement('ul');
    divList.appendChild(lineUl);
    for (let index2=0; index2 < N; index2+=1) {
      let pixelLi = document.createElement('li')
      pixelLi.className = 'pixel';
      pixelLi.addEventListener("click", changeColor);
      lineUl.appendChild(pixelLi);
      }
  }
}

let colours = document.getElementsByClassName("color");

for (let index = 0; index < colours.length; index +=1) {
  colours[index].addEventListener("click", changeSelectedColor)
} 

let pixels = document.getElementsByClassName("pixel");

for (let index = 0; index < pixels.length; index +=1) {
  pixels[index].addEventListener("click", changeColor)
}
let currentColorSelected = document.getElementsByClassName("selected")[0];

let button = document.getElementById("clear-board");
button.addEventListener("click", clearPixels)

function changeSelectedColor(event) {
    currentColorSelected.classList.remove("selected"); 
    currentColorSelected = event.target;
    currentColorSelected.classList.add("selected");    
} 

function changeColor (event) {
  const cssObj = window.getComputedStyle(currentColorSelected, null); // Referência retirada do site W3 Schools <https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp>
  let backgroundColor = cssObj.getPropertyValue("background-color");  // Referência retirada do site W3 Schools. <https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp>
  event.target.style.backgroundColor = backgroundColor;   
} 

function clearPixels() { 
for (let index = 0; index < pixels.length; index+=1) {
  pixels[index].style.backgroundColor = "white"; 
}

}
