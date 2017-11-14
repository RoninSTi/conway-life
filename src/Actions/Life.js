import * as types from '../Utils/ActionTypes';

export function clear() {
  return {
    type: types.CLEAR
  }
}

export function startSimulation() {
  return {
    type: types.START_SIMULATION
  }
}

export function stopSimulation() {
  return {
    type: types.STOP_SIMULATION
  }
}

export function tick() {
  return {
    type: types.TICK
  }
}

export function toggleCell(row, col, status) {
  return {
    type: types.TOGGLE_CELL,
    row,
    col,
    status
  }
}