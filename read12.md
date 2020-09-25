# the chart.js 

_is a tool developed as codes not a sperate programme that run by it self  work by an html code related to display screens  and scripts yes , it's script this feature it's just a small link script it maybe a url related  the chart.js or   it js file can be added,_

 

**for the structure <canvas></canvas> and scripts to launch the chart.js** 

**then link the canvas with script by declare it by id or class** 

**identefy the shape of chart , you can draw anything by it ,style and design , or drawing text**  

 _The origin of this grid is positioned in the top left corner at coordinate (0,0)_
_Unlike SVG, <canvas> only supports two primitive shapes: rectangles and paths (lists of points connected by lines)._

```
 function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

