
let cor2 = document.getElementById("cor2");
let cor3 = document.getElementById("cor3");
let cor4 = document.getElementById("cor4"); 

function generateColor() { // Referência retirada do site, até linha 17, de 'Hora de Codar' <https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/>

    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }     
    return color;     
  } 

  cor2.style.backgroundColor = generateColor();
  cor3.style.backgroundColor = generateColor();
  cor4.style.backgroundColor = generateColor();  


let divList = document.getElementById("pixel-board"); //div que dará origem a outras ul/li

let inputBoardSize = document.getElementById("board-size"); // input de criacao de mais pixels

let buttonVQV = document.getElementById("generate-board"); // botao
buttonVQV.addEventListener("click", createInputPixelSquare)

let N = 5;
// createPixelSquare(); 

function createInputPixelSquare () { // input do usuario para criar um quadrado de pixels personalizado
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

function createPixelSquare () { // cria o quadrado de pixels
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

function changeSelectedColor(event) { // muda a cor selecionada e alterna a classe selected 
    currentColorSelected.classList.remove("selected"); 
    currentColorSelected = event.target;
    currentColorSelected.classList.add("selected");    
} 

function changeColor (event) { // preenche os pixels de acordo com a cor da paleta selecionada 
  const cssObj = window.getComputedStyle(currentColorSelected, null); // Referência retirada, até linha 18, do site W3 Schools <https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp> 
  let backgroundColor = cssObj.getPropertyValue("background-color");  
  event.target.style.backgroundColor = backgroundColor;   
} 

function clearPixels() {  // limpa os pixels
for (let index = 0; index < pixels.length; index+=1) {
  pixels[index].style.backgroundColor = "white";  
}

}
