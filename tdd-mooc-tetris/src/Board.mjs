export class Board {
  width;
  height;
  falling
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false
  }

  toString() {
    let board = '';
    for(let row = 0; row < this.width; row++) {
      for(let column = 0; column < this.height; column ++) {
        if(row === 0 && column ===1 && this.falling) {
          board +='X'
        }else {
          board +='.'
        }
      }
      board +='\n'
    }
    return board.toString();
  }

  drop(block) {
    this.falling = true;
    this.newBlock = block;
  }

}
