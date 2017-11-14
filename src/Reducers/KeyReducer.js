import {
  FETCHING_KEY_DATA,
  FETCHING_KEY_DATA_SUCCESS,
  FETCHING_KEY_DATA_FAIL
} from '../Utils/ActionTypes';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null
}

export default function(state=initialState, action) {
  switch (action.type) {
    case FETCHING_KEY_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      });
    case FETCHING_KEY_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      });
    case FETCHING_KEY_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.payload
      });
    default:
      return state;
  }
}