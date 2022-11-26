var xValue = ['Jan20', 'Feb20', 'Mar20', 'Apr20', 'May20', 'Jun20', 'Jul20', 'Aug20', 'Sep20', 'Oct20', 'Nov20', 'Dec20'];

var yValue = [140, 351, 325, 247, 275, 228, 223, 195, 273, 237, 291, 252];
var yValue2 = [43, 70, 77, 50, 51, 58, 78, 55, 75, 76, 76, 80];
var yValue3 = [95, 125, 126, 88, 122, 102, 104, 101, 111, 113, 132, 144];


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
  title: 'Total Property Sold 2020'
};

Plotly.newPlot('plot2', data, layout);