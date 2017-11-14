import { 
  TOGGLE_CELL,
  TICK,
  START_SIMULATION,
  STOP_SIMULATION,
  CLEAR
 } from '../Utils/ActionTypes';

 import cellStatus from '../Utils/LifeHelper';

const initialState = {
  grid: {
    rows: 20,
    cols: 20
  },
  alive: [],
  simulation: false,
  tick: 0,
}

export default function(state=initialState, action) {
  switch (action.type) {
    case TOGGLE_CELL:
      switch (action.status.style) {
        case 'alive': {
          const newAlive =  [
            ...state.alive.slice(0, action.status.index),
            ...state.alive.slice(action.status.index + 1)
          ];

          return {
            ...state,
            alive: newAlive
          }
        }
        case 'dead': {
          const cell = {
            row: action.row,
            col: action.col
          };

          const newAlive = [
            ...state.alive.slice(0, state.alive.length),
            cell,
            ...state.alive.slice(state.alive.length)
          ];

          return { 
            ...state,
             alive: newAlive 
          }; 
        }
        default:
          return state;
      }
    case TICK:
      let newAlive = [];
      for (let r = 0; r < state.grid.rows; r++) {
        for (let c = 0; c < state.grid.cols; c++) {
          const cell = { row: r, col: c }
          if (cellStatus(cell) === 'alive') {
            newAlive.push(cell);
          }
        }
      }
      const newTick = state.tick + 1;
      return { 
        ...state,
        alive: newAlive,
        tick: newTick,
      };
    case START_SIMULATION:
      return { ...state, simulation: true }
    case STOP_SIMULATION:
      return { ...state, simulation: false }
    case CLEAR:
      return { 
        ...state, 
        alive: [],
        tick: 0
       }
    default:
      return state;
  }
}