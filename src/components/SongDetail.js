import React from 'react';

import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	if (!song) return null;

	return (
		<div>
			<h1>{song.title}</h1>
			<p>{song.duration}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
