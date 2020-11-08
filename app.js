'use strict';

var boxEl = document.getElementById('box');
var imgOneEl = document.getElementById('img-one');
var imgTwoEl = document.getElementById('img-two');
var imgThreeEl = document.getElementById('img-three');
// var results = document.getElementById('results');

var picks = 0;
var catalogArr = [];
var voteCap = 20;
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

var localCatalog = localStorage.getItem('localLog');

if (localCatalog) {
  catalogArr = JSON.parse(localCatalog);
}

else {
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
}

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

  imgOneEl.src = catalogArr[renderQue[0]].src;
  imgOneEl.alt = catalogArr[renderQue[0]].name;
  imgTwoEl.src = catalogArr[renderQue[1]].src;
  imgTwoEl.alt = catalogArr[renderQue[1]].name;
  imgThreeEl.src = catalogArr[renderQue[2]].src;
  imgThreeEl.alt = catalogArr[renderQue[2]].name;

  catalogArr[renderQue[1]].views++;
  catalogArr[renderQue[1]].views++;
  catalogArr[renderQue[1]].views++;
}

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

    localStorage.setItem('localLog', JSON.stringify(catalogArr));

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartNames,
        datasets: [
          {
            label: 'Vote(s)',
            data: chartVotes,
            backgroundColor:
              'rgba(0, 0, 255, 0.9)',
            borderColor:
              'rgba(0, 255, 0, 1)',
            borderWidth: 1
          },
          {
            label: 'View(s)',
            data: chartViews,
            backgroundColor:
              'rgba(0, 255, 0, 1)',
            borderColor:
              'rgba(0, 0, 255, 0.9)',
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
  }
}


boxEl.addEventListener('click', handleVote);
