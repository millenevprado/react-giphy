import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'boBx3e70XSldVIHyDVMZwdoUkbDnWxz8';

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
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=15`;
    fetch(giphEndpoint)
      .then(response => response.json())
      .then((result) => {
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
