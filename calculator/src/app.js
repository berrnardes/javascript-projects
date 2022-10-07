
let input = document.getElementById('input')
let operators = document.querySelectorAll('.operators div')
let numbers = document.querySelectorAll('.numbers div')
let clear = document.getElementById('clear')
let equal = document.getElementById('result')
let resultDisplayed = false;


for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', function(e){
    let currentStr = input.innerHTML;
    let lastChar = currentStr[currentStr.length - 1];
  })
}
