import React, { Component } from 'react';

class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default Playlist;
