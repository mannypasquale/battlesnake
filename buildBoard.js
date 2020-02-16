/* eslint-disable prefer-destructuring */
function buildBoard(data) {
  //   |0||0||0||0||0|
  //   |0||0||0||0||0|
  //   |0||0||0||0||0|
  //   |0||0||0||0||0|
  const board = [];
  // set entire board to 0's
  for (let i = 0; i < data.height; i += 1) {
    board[i] = [];
    for (let y = 0; y < data.width; y += 1) {
      board[i].push(0);
    }
  }
  // Now that the board is made we may want to flag each space thats currently occupied by a snake
  for (let i = 0; i < data.snakes.length; i += 1) {
    for (let z = 0; z < data.snakes[i].body.length; z += 1) {
      const x = data.snakes[i].body[z].x;
      const y = data.snakes[i].body[z].y;
      board[y][x] = 1;
    }
    // body: [ { x: 3, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 0 } ]
    // console.log(data.snakes[i].body);
    // body data.snakes[i] has name etc
    // also has body which is the size of the snake
    // data.snakes[i].body.length LOL FUck this gets complex
    // each item there is a squard that this snake will take uppppppp
    // THis function only gets called ONCE
  }
  // console.log('board elgnt and width is ', board.length);
  // console.log('shouwld be whatever the width/height is   ', board.length);
  // console.log(board[0]);
  // console.log(board[1]);
  // console.log(board[2]);
  // console.log(board[3]);
  // console.log(board[4]);
  return board;
}

module.exports = buildBoard;
