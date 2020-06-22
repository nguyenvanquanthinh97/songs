import { combineReducers } from 'redux';

import * as actionTypes from '../actions/ActionsTypes';

const initialSongsState = [
	{ title: 'No Scrubs', duration: '4:05' },
	{ title: 'Macarena', duration: '2:30' },
	{ title: 'All Star', duration: '3:15' },
	{ title: 'I Want it That Way', duration: '1:45' }
];

const songsReducer = (state = initialSongsState, action) => {
	return state;
};

const selectedSongReducer = (state = null, action) => {
	switch (action.type) {
		case actionTypes.SONG_SELECT: {
			const { payload } = action;
			return payload;
		}

		default:
			return state;
	}
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
