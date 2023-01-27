import { Block } from "./Block.mjs";

export class Board {
  width;
  height;
  newBlock;
  stationaryBlocks ;
  // matrix
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.newBlock = null;
    this.stationaryBlocks = [];
    //this.matrix = Array(9).fill(Array(9))
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
    return temporaryBoard;
  }
  drop(block) {
    if(this.newBlock) {
      throw new Error('already falling');
    }
    this.newBlock = block;
  }
  hasFalling( ) {
    return this.newBlock !== null;
  }
  tick() { 
    if(this.hasFalling() && this.newBlock.y < this.height -1) {
      this.newBlock.y += 1;
    }
    this.stationaryBlocks.push(this.newBlock);
    this.newBlock = null;
  }
}
