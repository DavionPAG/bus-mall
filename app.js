'use strict';

var boxEl = document.getElementById('box');
var imgOneEl = document.getElementById('img-one');
var imgTwoE = document.getElementById('img-two');
var imgThreeEl = document.getElementById('img-three');
var sumClicks = [];
var catalogArr = [];

function Catalog(name) {
  this.name = name;
  this.src = `img/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  catalogArr.push(this);
}

function rdmPix(){
  return Math.floor(Math.random() * catalogArr.length);
}

function selector{
  var catOne = rdmPix();
  var catTwo = rdmPix()
  var catThree = rdmPix()
}

new Catalog('bag');
new Catalog('banana');
new Catalog('bathroom');
new Catalog('boots');
new Catalog('breakfast');
new Catalog('bubblegum');
new Catalog('chair');
new Catalog('cthulhu');
new Catalog('dog-duck');
new Catalog('dragon');
new Catalog('pen');
new Catalog('pet-sweep');
new Catalog('scissors');
new Catalog('shark');
new Catalog('sweep');
new Catalog('tauntaun');
new Catalog('unicorn');
new Catalog('usb');
new Catalog('water-can');
new Catalog('wine-glass');




