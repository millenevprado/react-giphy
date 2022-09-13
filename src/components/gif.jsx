import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = 'https://media2.giphy.com/media/l0HlNbeDtLwwkBUiI/200w.gif';

    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
