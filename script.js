let colours = document.getElementsByClassName("color");
// colours.addEventListener("click", selectColor)

for (let index = 0; index < colours.length; index +=1) {
  colours[index].addEventListener("click", changeSelectedColor)
} 

function changeSelectedColor(event) {
    // console.log("ANTES DE ATUALIZAR:");
    // console.log(event.target.outerHTML);
    // // console.log(event.target.classList);
    let currentColorSelected = document.getElementsByClassName("selected")[0]     
    currentColorSelected.classList.remove("selected");

    event.target.classList.add("selected")
 
    // // console.log("DEPOIS DE ATUALIZAR:");
    // console.log(event.target.outerHTML);
    // console.log(event.target.classList);

    // console.log(event);
 
    // console.log(currentColorSelected);
}

