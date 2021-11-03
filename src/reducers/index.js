import { combineReducers } from 'redux';

import movies from './movieReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
	movies,
	favorites
});

export default rootReducer;
