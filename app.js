var recipes = require('./recipes.json');


function pickDinner(){
var recipeNames = Object.keys(recipes);
//console.log(keys);

var index = [Math.floor(Math.random() * recipeNames.length)];
console.log(recipeNames[index] + ': ' + recipes[recipeNames[index]]);
return recipeNames[index] + ': ' + recipes[recipeNames[index]];
}

pickDinner();

function printDinner() {
    var output = pickDinner();

    console.log(output);
}

var button = document.getElementById('pick');
button.addEventListener("click", printDinner, false);

