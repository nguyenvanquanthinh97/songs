import React from 'react';

import './SongItem.css';

const SongItem = ({ song, onSongSelect }) => {
	return (
		<div className="item song-item">
			<div style={{ marginRight: 'auto' }}>
				<p>{song.title}</p>
			</div>
			<div>
				<button onClick={() => onSongSelect(song)} className="ui button primary">
					SELECT
				</button>
			</div>
		</div>
	);
};

export default SongItem;
