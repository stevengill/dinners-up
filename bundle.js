(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./recipes.json":2}],2:[function(require,module,exports){
module.exports={
	"Spaghetti": ["pasta", "sauce"],
	"Stirfry": ["onions", "peppers", "broccoli", "mushrooms", "carrots", "green onions", "soy sauce", "hoisin sauce"],
	"Greek Salad": ["red onion", "tomatoes", "cucumbers", "green pepper", "feta", "olives", "viniagrette dressing"],
	"Fried Rice": ["steamed rice", "eggs", "carrots", "red pepper", "green onions", "mushrooms", "peas", "red chili flakes"],
	"Ramen": ["ramen noodle mix", "eggs", "assorted vegetables"],
	"Daal": ["lentils", "onions", "rice", "garlic", "tumeric", "cayan pepper", "cumin", "salt & pepper"],
	"Kimchee Fried Rice": ["rice", "gochujang", "Kimchee", "tamari", "sesame seeds"]
}

},{}]},{},[1]);
