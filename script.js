document.addEventListener("DOMContentLoaded", init)
function init () {

var breakfast = document.getElementById('breakfast-foods');
var lunch = document.getElementById('lunch-foods');

console.log(breakfast)
console.log(lunch)

var button = document.getElementById('brunch');

button.addEventListener('click', transfer)
function transfer () {
console.log(breakfast.querySelector('li') );
var breakfastAllList = breakfast.querySelector
var lastList = breakfast.querySelector('li: last-child');
console.log(lastList)

var removedList = breakfast.removeChild(lastList);
lunch.appendChild(removedList)
}

}
