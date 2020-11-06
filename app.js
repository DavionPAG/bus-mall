'use strict';

var boxEl = document.getElementById('box');
var imgOneEl = document.getElementById('img-one');
var imgTwoEl = document.getElementById('img-two');
var imgThreeEl = document.getElementById('img-three');
// var results = document.getElementById('results');

var picks = 0;
var catalogArr = [];
var voteCap = 25;
var renderQue = [];

var ctx = document.getElementById('myChart').getContext('2d');

function Catalog(name) {
  this.name = name;
  this.src = `img/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  catalogArr.push(this);
}

function rdmPix() {
  return Math.floor(Math.random() * catalogArr.length);
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

function popRenderQue() {
  while (renderQue.length > 3) {
    renderQue.shift();
  }
  while (renderQue.length < 6) {
    var pick = rdmPix();
    while (renderQue.includes(pick)) {
      pick = rdmPix();
    }
    renderQue.push(pick);
  }
}

function renderPicks() {
  popRenderQue();
  console.log(renderQue);
  var pickOne = renderQue[0];
  var pickTwo = renderQue[1];
  var pickThree = renderQue[2];

  imgOneEl.src = catalogArr[pickOne].src;
  imgOneEl.alt = catalogArr[pickOne].name;
  imgTwoEl.src = catalogArr[pickTwo].src;
  imgTwoEl.alt = catalogArr[pickTwo].name;
  imgThreeEl.src = catalogArr[pickThree].src;
  imgThreeEl.alt = catalogArr[pickThree].name;

  catalogArr[pickOne].views++;
  catalogArr[pickTwo].views++;
  catalogArr[pickThree].views++;
}

// function renderResults() {
//   for (var i = 0; catalogArr.length; i++) {
//     var li = document.createElement('li');
//     li.textContent = `${catalogArr[i].name} had ${catalogArr[i].votes} vote(s), and was seen ${catalogArr[i].views} times.`;
//     results.appendChild(li);
//   }
// }

renderPicks();

var chartNames = [];
var chartVotes = [];
var chartViews = [];

function chartData() {
  for (var i = 0; i < catalogArr.length; i++) {
    chartNames.push(catalogArr[i].name);
    chartVotes.push(catalogArr[i].votes);
    chartViews.push(catalogArr[i].views);
  }

}

function handleVote(e) {
  var pickClick = e.target.alt;
  picks++;
  renderPicks();

  for (var i = 0; i < catalogArr.length; i++) {
    if (pickClick === catalogArr[i].name)
      catalogArr[i].votes++;
  }

  if (picks === voteCap) {
    boxEl.removeEventListener('click', handleVote);
    chartData();
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartNames,
        datasets: [
          {
            label: 'Vote(s)',
            data: chartVotes,
            backgroundColor: [
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
            ],
            borderColor: [
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
            ],
            borderWidth: 1
          },
          {
            label: 'View(s)',
            data: chartViews,
            backgroundColor: [
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',
              'rgba(0, 255, 0, 1)',

            ],
            borderColor: [
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',
              'rgba(0, 0, 255, 0.9)',

            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    // renderResults();
  }
}

boxEl.addEventListener('click', handleVote);
