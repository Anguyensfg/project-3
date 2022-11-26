
var xValue = ['Jan19', 'Feb19', 'Mar19', 'Apr19', 'May19', 'Jun19', 'Jul19', 'Aug19', 'Sep19', 'Oct19', 'Nov19', 'Dec19'];

var yValue = [151, 292, 338, 268, 330, 212, 348, 292, 295, 324, 450, 338];
var yValue2 = [38, 56, 59, 44, 71, 31, 72, 53, 71, 82, 93, 85];
var yValue3 = [65, 90, 93, 89, 95, 56, 122, 94, 102, 129, 156, 120];


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
  title: 'Total Property Sold 2019'
};

Plotly.newPlot('plot1', data, layout);