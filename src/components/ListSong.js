import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import SongItem from './SongItem';

const ListSong = (props) => {
	const { songs, onSongSelect } = props;
	const renderSong = songs.map((song) => <SongItem song={song} onSongSelect={onSongSelect} key={song.title} />);
	return <div className="ui relaxed divided list">{renderSong}</div>;
};

const mapStateToProps = (state) => {
	return {
		songs: state.songs
	};
};

/**
 * @function mapDispatchToProps(dispatch: @function) : @object
 * if instead of passing function, but passing object 
 * The @function connect will wrap the @object with a @function dispatch 
*/
const mapDispatchToProps = (dispatch) => {
	return {
		onSongSelect: (song) => dispatch(actions.songSelected(song))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSong);
