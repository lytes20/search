import { combineReducers } from 'redux';
import reducers from './SearchBar/reducers';

export default combineReducers({
  searchBarReducer: reducers,
});
