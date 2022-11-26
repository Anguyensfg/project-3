var xValue = ['Jan20', 'Feb20', 'Mar20', 'Apr20', 'May20', 'Jun20', 'Jul20', 'Aug20', 'Sep20', 'Oct20', 'Nov20', 'Dec20'];

var yValue = [719364, 82301, 810116, 789852, 773557, 817786, 807604, 796293, 810770, 828769, 898877, 867024];
var yValue2 = [517168, 553770, 582782, 587444, 552754, 635950, 562583, 562975, 653626, 657947, 607375,593022];
var yValue3 = [419277, 414238, 455849, 454398, 479874, 413554, 437637, 447400, 449204, 441840, 442041, 498863];


var House = {
  name: 'House',
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  opacity: 0.5,
  marker: {
    color: 'rgb(158,202,225)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var Townhouse = {
  name: 'Townhouse',
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var Unit = {
  name: 'Unit',
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};
var data = [House,Townhouse,Unit];

var layout = {
  title: 'Average Sold Price 2020'
};

Plotly.newPlot('plot4', data, layout);