import * as actionTypes from './ActionsTypes';

export const songSelected = (song) => {
	return {
		type: actionTypes.SONG_SELECT,
		payload: song
	};
};
