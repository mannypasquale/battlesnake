/* eslint-disable prefer-destructuring */
const PF = require('pathfinding');
// const floodFill = require('n-dimensional-flood-fill');

function buildBoard(req) {
  // const possibleMoves = ['up', 'down', 'left', 'right'];
  const grid = new PF.Grid(req.body.board.width, req.body.board.height);
  console.log(req);

  function setUnwalkableGridAreas(body, backupGrid) {
    console.log('>>>>> setUnwalkableGridAreas | SETTING UNWALKABLE AREAS');
    console.log(body);
    body.forEach((object) => {
      backupGrid.setWalkableAt(object.x, object.y, false);
    });

    // snakes.forEach((snake) => {
    //   snake.body.req.forEach((object) => {
    //     backupGrid.setWalkableAt(object.x, object.y, false);
    //   });
    // });

    return backupGrid;
  }
  const markedGrid = setUnwalkableGridAreas(req.body.you.body, grid.clone());
  console.log(markedGrid.nodes);
  return markedGrid;
}

module.exports = buildBoard;
