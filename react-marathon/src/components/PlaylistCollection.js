import React, { Component } from 'react';
import App from './App';

class PlaylistCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlists = this.props.playlists.map((playlist) => {
      return (
        <Playlist
          key={playlist.id}
          name={playlist.name}
          song={playlist.song}
        />
      );
    });
    return (
      <ul>{playlists}</ul>
    );
  }
}

export default PlaylistCollection;
