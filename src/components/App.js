import React from 'react';

import ListSong from './ListSong';
import SongDetail from './SongDetail';

const App = () => {
	return (
		<div className="ui container" style={{marginTop: '10px'}}>
			<div className="ui grid">
				<div className="ui row">
					<div className="eight wide column">
						<ListSong />
					</div>
					<div className="eight wide column">
						<SongDetail />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
