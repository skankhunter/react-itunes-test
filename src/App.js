import React, { Component } from 'react';
import {Search} from './components/Search';
import {Result} from './components/Result';
import './App.css';

class App extends Component {
    state = {
        results: [],
        searchText: '',
        albumName: 'all',
    };

    updateSearchText = (e) => {
        this.setState({
            searchText: e.target.value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let searchText = this.state.searchText;
        try {
            const searchData = await this.fetchResult(searchText);
            const results = searchData.results;

            this.setState({
                results,
                albumName: 'all'
            });
        } catch (e) {
            alert(e);
        }
    };

    async fetchResult(searchText) {
        let search  = searchText.split(' ').join('+');
        let URL = 'https://itunes.apple.com/search?media=music&term=';
        let request = URL + search;
        let response = await fetch(request);
        let json = await response.json();
        return json;
    }

    handleAlbumChange = (e) => {
        this.setState({
            albumName: e.target.value,
        });
    };

    getUniqAlbums() {
        let arr = [];

        if (this.state.results.length === 0) return arr;

        this.state.results.forEach(track => {
            const hasAlbum = arr.find(item => item.collectionName === track.collectionName);

            if (!hasAlbum) {
                arr.push(track);
            }
        });
        return arr;
    }

  render() {
      return (
          <React.Fragment>
             <Search
                 onInputChange={this.updateSearchText}
                 value={this.state.searchText}
                 onSubmit={this.handleSubmit}
                 onAlbumChange={this.handleAlbumChange}
                 albumName={this.state.albumName}
                 albums={this.getUniqAlbums()}
             />
             <Result
                 resultData={this.state.results}
                 searchText={this.state.searchText}
                 albumName={this.state.albumName}
             />
          </React.Fragment>
      )
  }
}

export default App;
