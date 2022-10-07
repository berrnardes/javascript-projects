let input = document.getElementById("input");
let number = document.querySelectorAll(".calculator__numbers button");
let operators = document.querySelectorAll(".calculator__operators button");
let result = document.getElementById("equal");
let clear = document.getElementById("clear");
let resultDisplayed = false;

// Adicionar handle click para os números
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => {
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    if (resultDisplayed == false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed == true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷"
    ) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

// Adicionar handle click para os operadores
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {

    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    if(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷"){
      let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML
      input.innerHTML = newString
    } else if(currentString.length == 0){
      console.log("Digite um número")
    } else{
      input.innerHTML = input.innerHTML + e.target.innerHTML
    }
  });
}


// Quando clicar no botão de igual
result.addEventListener("click", () => {
  let inputString = input.innerHTML;

  let numbers = inputString.split(/\+|\-|\×|\÷/g);

  let operators = inputString.replace(/[0-9]|\./g, "").split("")

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("-----------------")
})

