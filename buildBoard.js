/* eslint-disable prefer-destructuring */
function buildBoard(data) {
  const height = data.height;
  const width = data.width;

  const board = [];
  /**
   * Build the board and fill it with '0' to denote empty space
   * 0 Empty space
   * 1 Snakes
   * 2 Food
   */
  for (let row = 0; row < height; row += 1) {
    const boardRow = [];
    for (let col = 0; col < width; col += 1) {
      boardRow.push(0);
    }
    board.push(boardRow);
  }
  // Put some snakes in to the board
  for (let i = 0; i < data.snakes.length; i += 1) {
    for (let j = 0; j < data.snakes[i].body.length; j += 1) {
      board[data.snakes[i].body[j].y][data.snakes[i].body[j].x] = 1;
    }
  }
  // Put some food on that board
  for (let i = 0; i < data.food.length; i += 1) {
    board[data.food[i].y][data.food[i].x] = 2;
  }
  // Show board
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  console.log(board[3]);
  return board;
}

module.exports = buildBoard;
