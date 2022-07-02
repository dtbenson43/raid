import Paper from "paper";

export default function preview(canvas) {
  Paper.setup(canvas);
  const temp = new Paper.Path.Rectangle(
    new Paper.Point(16, 16),
    new Paper.Point(160, 160)
  );
  temp.strokeColor = "black";
  temp.fillColor = "blue";
  temp.strokeWidth = 1;

  Paper.view.draw();
  // Paper.view.scrollBy(new Paper.Point(-200, 0));
}
