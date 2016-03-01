import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as modal } from './services/modal.js';
import { reducer as email } from './services/send-email.js';

const rootReducer = combineReducers({
  routing,
  modal,
  email,
});

export default rootReducer;
