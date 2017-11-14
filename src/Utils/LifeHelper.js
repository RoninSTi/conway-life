import store from '../Store';

function getNeighbors(cell) {
  const state = store.getState();
  let rowAbove = cell.row - 1 < 0 ? state.life.grid.rows - 1:cell.row - 1;
  let rowBelow = cell.row + 1 === state.life.grid.rows ? 0:cell.row + 1;
  let colLeft = cell.col - 1 < 0 ? state.life.grid.cols - 1:cell.col - 1;
  let colRight = cell.col + 1 === state.life.grid.cols ? 0:cell.col + 1;

  let neighbors = [];

  neighbors.push({
    row: cell.row,
    col: colLeft
  });
  neighbors.push({
    row: rowAbove,
    col: colLeft
  });
  neighbors.push({
    row: rowAbove,
    col: cell.col
  });
  neighbors.push({
    row: rowAbove,
    col: colRight
  });
  neighbors.push({
    row: cell.row,
    col: colRight
  });
  neighbors.push({
    row: rowBelow,
    col: colRight
  });
  neighbors.push({
    row: rowBelow,
    col: cell.col
  });
  neighbors.push({
    row: rowBelow,
    col: colLeft
  });

  return neighbors;
}

function liveNeighbors(cell, alive) {
  const neighbors = getNeighbors(cell);
  let count = 0;
  neighbors.forEach((pair, index) => {
    if (isAlive(pair, alive)) {
      count++;
    }
  });

  return count;
}

function isAlive(cell, alive) {
  let status = false;
  alive.forEach((pair, index) => {
    if(pair.row === cell.row && pair.col === cell.col) {
      status = true; 
    }
  });

  return status;
}

export default function cellStatus(cell, alive) {
  switch (liveNeighbors(cell, alive)) {
    case 0:
      return 'dead';
    case 1:
      return 'dead';
    case 2:
      if (isAlive(cell, alive)) {
        return 'alive';
      } else {
        return 'dead';
      }
    case 3:
      return 'alive';
    default:
      return 'dead';
  }
}