import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as modal } from './services/modal.js';

const rootReducer = combineReducers({
  routing,
  modal,
});

export default rootReducer;
