interface circle {
  kind: "circle";
  redius: number;
}
interface square {
  kind: "square";
  side: number;
}
interface rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = circle | square | rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.redius ** 22;
  }else if(shape.kind === "rectangle"){
    return shape.length * shape.width
  }
  return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.redius ** 22;
    case "square":
      return shape.side * shape.side;
      case 'rectangle':
        return shape.length * shape.width
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
