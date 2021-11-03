import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import moviesData from './../data.js';

const initialState = {
	movies: moviesData,
	appTitle: "IDBoM Internet DataBase of Movies"
}

const movies = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_MOVIE:
			return {
				...state,
				movies: state.movies.filter(item => (action.payload !== item.id))
			}
		case ADD_MOVIE: 
			return {
				...state,
				movies: [...state.movies, action.payload]
			}
		default:
			return state;
	}
}

export default movies;
