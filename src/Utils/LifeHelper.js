import store from '../Store';

function getNeighbors(cell) {
  const state = store.getState();

  /*
  * Setup the continuous grid.
  * The col to the left of the left-most col is the col furthest to the right, etc
  */
  
  let rowAbove = cell.row - 1 < 0 ? state.life.grid.rows - 1:cell.row - 1;
  let rowBelow = cell.row + 1 === state.life.grid.rows ? 0:cell.row + 1;
  let colLeft = cell.col - 1 < 0 ? state.life.grid.cols - 1:cell.col - 1;
  let colRight = cell.col + 1 === state.life.grid.cols ? 0:cell.col + 1;

  let neighbors = [];

  neighbors
    .push({
      row: cell.row,
      col: colLeft
    })
    .push({
      row: rowAbove,
      col: colLeft 
    })
    .push({
      row: rowAbove,
      col: cell.col
    })
    .push({
      row: rowAbove,
      col: colRight
    })
    .push({
      row: cell.row,
      col: colRight
    })
    .push({
      row: rowBelow,
      col: colRight
    })
    .push({
      row: rowBelow,
      col: cell.col
    })
    .push({
      row: rowBelow,
      col: colLeft
    });

  return neighbors;
}

function liveNeighbors(cell) {
  const neighbors = getNeighbors(cell);
  let count = 0;
  neighbors.forEach((pair, index) => {
    if (isAlive(pair)) {
      count++;
    }
  });

  return count;
}

function isAlive(cell) {
  const state = store.getState();
  let status = false;
  state.life.alive.forEach((pair, index) => {
    if(pair.row === cell.row && pair.col === cell.col) {
      status = true; 
    }
  });

  return status;
}

export default function cellStatus(cell) {
  switch (liveNeighbors(cell)) {
    case 0:
      return 'dead';
    case 1:
      return 'dead';
    case 2:
      if (isAlive(cell)) {
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