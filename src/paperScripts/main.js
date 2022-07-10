import Paper from "paper";

const map = {
  size: 32,
  walls: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [0, 11],
    [0, 12],
    [0, 13],
    [0, 14],
    [0, 15],
    [0, 16],
    [0, 17],
    [0, 18],
    [0, 19],
    [0, 20],
    [0, 21],
    [0, 22],
    [0, 23],
    [0, 24],
    [0, 25],
    [0, 26],
    [0, 27],
    [0, 28],
    [0, 29],
    [0, 30],
    [0, 31],
    [1, 0],
    [1, 31],
    [2, 0],
    [2, 31],
    [3, 0],
    [3, 31],
    [4, 0],
    [4, 31],
    [5, 0],
    [5, 31],
    [6, 0],
    [6, 31],
    [7, 0],
    [7, 31],
    [8, 0],
    [8, 31],
    [9, 0],
    [9, 31],
    [10, 0],
    [10, 31],
    [11, 0],
    [11, 31],
    [12, 0],
    [12, 31],
    [13, 0],
    [13, 31],
    [14, 0],
    [14, 31],
    [15, 0],
    [15, 31],
    [16, 0],
    [16, 31],
    [17, 0],
    [17, 31],
    [18, 0],
    [18, 31],
    [19, 0],
    [19, 31],
    [20, 0],
    [20, 31],
    [21, 0],
    [21, 31],
    [22, 0],
    [22, 31],
    [23, 0],
    [23, 31],
    [24, 0],
    [24, 31],
    [25, 0],
    [25, 31],
    [26, 0],
    [26, 31],
    [27, 0],
    [27, 31],
    [28, 0],
    [28, 31],
    [29, 0],
    [29, 31],
    [30, 0],
    [30, 31],
    [31, 0],
    [31, 1],
    [31, 2],
    [31, 3],
    [31, 4],
    [31, 5],
    [31, 6],
    [31, 7],
    [31, 8],
    [31, 9],
    [31, 10],
    [31, 11],
    [31, 12],
    [31, 13],
    [31, 14],
    [31, 15],
    [31, 16],
    [31, 17],
    [31, 18],
    [31, 19],
    [31, 20],
    [31, 21],
    [31, 22],
    [31, 23],
    [31, 24],
    [31, 25],
    [31, 26],
    [31, 27],
    [31, 28],
    [31, 29],
    [31, 30],
    [31, 31],
  ],
};

class RaidGame {
  constructor() {
    this.paper = null;
    this.isInitialized = false;
  }

  initCanvas(canvas) {
    if (this.isInitialized) return;
    this.paper = new Paper.PaperScope();
    this.paper.setup(canvas);
    this.isInitialized = true;
    this.draw();
  }

  draw() {
    const { Path, Point, Tool, view } = this.paper;

    const walls = map.walls.map(([x, y], i) => {
      const temp = new Path.Rectangle(
        new Point(x * 8, y * 8),
        new Point(x * 8 + 8, y * 8 + 8)
      );
      temp.strokeColor = "black";
      temp.fillColor = "blue";
      temp.strokeWidth = 1;
      return temp;
    });

    // Create a Tool so we can listen for events
    var toolPan = new Tool();
    toolPan.activate();

    // On drag, scroll the View by the difference between mousedown
    // and mouseup
    toolPan.onMouseDrag = function (event) {
      var delta = event.downPoint.subtract(event.point);
      view.scrollBy(delta);
    };

    view.draw();
    // PaperScope.view.scrollBy(new PaperScope.Point(-200, 0));
  }
}

export default RaidGame;

// export default function main(canvas) {
//   const PaperScope = new Paper.PaperScope();
//   PaperScope.setup(canvas);

//   const walls = map.walls.map(([x, y], i) => {
//     const temp = new PaperScope.Path.Rectangle(
//       new PaperScope.Point(x * 8, y * 8),
//       new PaperScope.Point(x * 8 + 8, y * 8 + 8)
//     );
//     temp.strokeColor = "black";
//     temp.fillColor = "blue";
//     temp.strokeWidth = 1;
//     return temp;
//   });

//   // Create a Tool so we can listen for events
//   var toolPan = new PaperScope.Tool();
//   toolPan.activate();

//   // On drag, scroll the View by the difference between mousedown
//   // and mouseup
//   toolPan.onMouseDrag = function (event) {
//     var delta = event.downPoint.subtract(event.point);
//     PaperScope.view.scrollBy(delta);
//   };

//   PaperScope.view.draw();
//   PaperScope.view.scrollBy(new PaperScope.Point(-200, 0));
// }
