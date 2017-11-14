import { combineReducers } from 'redux';
import KeyReducer from './KeyReducer';
import LifeReducer from './LifeReducer';

export default combineReducers({
  keys: KeyReducer,
  life: LifeReducer
});