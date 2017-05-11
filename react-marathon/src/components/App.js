import React, { Component} from 'react';
import PlaylistCollection from './PlaylistCollection';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    };

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="column medium-6">
          <h1>Playlist Portion</h1>
          <PlaylistCollection
            playlists={data.playlists}
          />
        </div>
      </div>
    );
  }
}

export default App;
