export class Block {
  color;
  x;
  y;
  isFalling;

  constructor(color) {
    this.color = color;
    this.x = 1;
    this.y = 0;
    this.isFalling = true;
  }
}
