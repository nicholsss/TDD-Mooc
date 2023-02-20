export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let board = '';
    for(let row = 0; row < this.width; row++) {
      for(let column = 0; column < this.height; column ++) {
        board +='.'
      }
      board +='\n'
    }
    return board.toString();
  }
}
