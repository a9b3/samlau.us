import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as modal } from './services/modal.js';
import { reducer as app } from './services/app.js';

const rootReducer = combineReducers({
  routing,
  modal,
  app,
});

export default rootReducer;
