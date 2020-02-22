function makeMove(board, head) {
  let move;
  const possibleMoves = [];
  console.log(head);
  if (typeof board[head.y][head.x - 1] !== 'undefined' && board[head.y][head.x - 1] !== 1) {
    move = 'left';
    possibleMoves.push('left');
  } else if (typeof board[head.y][head.x + 1] !== 'undefined' && board[head.y][head.x + 1] !== 1) {
    possibleMoves.push('right');
    move = 'right';
  } else if (typeof board[head.y - 1] !== 'undefined' && board[head.y - 1][head.x] !== 1) {
    possibleMoves.push('up');
    move = 'up';
  } else if (typeof board[head.y + 1] !== 'undefined' && board[head.y + 1][head.x] !== 1) {
    possibleMoves.push('down');
    move = 'down';
  }
  console.log(move);

  // if (board.x =) {
  //   move = 'right'
  // }
  const randMove = Math.floor(Math.random(possibleMoves.length - 1));
  return possibleMoves[randMove];
}

module.exports = makeMove;
