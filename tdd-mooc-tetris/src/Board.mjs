import { Block } from "./Block.mjs";

export class Board {
  width;
  height;
  newBlock;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let board = "";
    for (let y = 0; y < this.width; y++) {
      for (let x = 0; x < this.height; x++) {
        board += this.blockDropping(y, x);
      }
      board += "\n";
    }
    return board;
  }
  
  blockDropping(y, x) {
    let temporaryBoard = "";
    if (this.newBlock && this.newBlock.y === y && this.newBlock.x === x) {
      temporaryBoard += this.newBlock.color;
    } else {
      temporaryBoard += ".";
    }
    console.log(temporaryBoard);
    return temporaryBoard;
  }
  drop(block) {
    this.newBlock = block;
  }
}
