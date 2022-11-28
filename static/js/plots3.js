var xValue = ['Jan19', 'Feb19', 'Mar19', 'Apr19', 'May19', 'Jun19', 'Jul19', 'Aug19', 'Sep19', 'Oct19', 'Nov19', 'Dec19'];

var yValue = [730508, 753608, 771776, 777515, 736782, 815168, 697387, 718048, 759231, 774585, 848190, 794141];
var yValue2 = [536010, 501750, 579601, 514329, 494655, 581758, 547625, 521090, 552722, 569262, 572117, 564238];
var yValue3 = [384014, 427705, 391843, 404785, 433359, 406900, 407189, 406204, 430948, 419135, 452013, 455095];


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
  title: 'Average Sold Price 2019 ($)'
};

Plotly.newPlot('plot3', data, layout);