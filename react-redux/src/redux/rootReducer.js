import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  user: userReducer
});

export default rootReducer;
