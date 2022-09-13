import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  // state
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'ITnn2IenMv7SE'
    };

    this.search("batman");
  }

  search = (query) => {
    // TODO: API call
    giphy('boBx3e70XSldVIHyDVMZwdoUkbDnWxz8').search({
      q: query,
      rating: 'g',
      limit: 15
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
