import React from 'react';
import '.././css/search.css';

class Search extends React.Component {
    render() {
        return (
            <header className="search">
                <form onSubmit={this.props.onSubmit} className="search__form" method="get">
                    <div className="search__singer">
                        <input onChange={this.props.onInputChange} value={this.props.value} className="input__search input--singer" type="text" id="search-bar" placeholder="Singer..."/>
                        <button type="submit" className="btn btn--find">Find!</button>
                    </div>
                    {this.props.albums.length > 0 && (
                        <select onChange={this.props.onAlbumChange} className="search__albums" value={this.props.albumName} >
                            <option value="all">all</option>
                            {this.props.albums.map(album => <option key={album.collectionName} value={album.collectionName}> {album.collectionName} </option>)}
                        </select>
                    )}

                    {/*<div className="search__song">
                        <input className="input__search" type="text" placeholder="Find song..."/>
                            <button className="btn btn--find">Find!</button>
                    </div>*/}
                </form>
            </header>
        );
    }
}

export  {Search};