import { combineReducers } from 'redux';
import ListReducer from './reducer_list'

const RootReducer = combineReducers({
  tasklists: ListReducer
});

export default RootReducer;