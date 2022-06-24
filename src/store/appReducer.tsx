import { combineReducers } from 'redux';
import itemsReducer from 'store/itemsReducer';

const appReducer = combineReducers({
  items: itemsReducer,
});

export default appReducer;
