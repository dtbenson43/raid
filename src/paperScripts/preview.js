import Paper from "paper";

export default function preview(canvas) {
  const PaperScope = new Paper.PaperScope();
  PaperScope.setup(canvas);
  const temp = new PaperScope.Path.Rectangle(
    new PaperScope.Point(16, 16),
    new PaperScope.Point(160, 160)
  );
  temp.strokeColor = "black";
  temp.fillColor = "blue";
  temp.strokeWidth = 1;

  console.log(PaperScope.view.viewSize);
  PaperScope.view.draw();
  // Paper.view.scrollBy(new Paper.Point(-200, 0));
}
