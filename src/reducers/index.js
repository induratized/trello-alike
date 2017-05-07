import { combineReducers } from 'redux';
import TaskListReducer from './reducer_tasklist'
// import ListReducer from './reducer_list'

const RootReducer = combineReducers({
  tasklists: TaskListReducer
});

export default RootReducer;