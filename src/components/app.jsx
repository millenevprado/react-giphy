import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: 'l0HlNbeDtLwwkBUiI' },
      { id: 'xT9IgDEI1iZyb2wqo8'}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="l0HlNbeDtLwwkBUiI" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
