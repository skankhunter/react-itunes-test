import React from 'react';
import '.././css/card.css';

class Card extends React.Component {
    getArtist() {
        return this.props.artistName || "Сорян, имени нет";
    }

    getAlbum() {
        return this.props.collectionName || "Шото не вижу альбома";
    }

    getDuration() {
        let millisec = this.props.trackTimeMillis;
        let resultDuration = Math.floor(millisec / 60000 ) + ':' + (Math.floor(millisec / 60) - (Math.floor(millisec / 3600) * 60)) + ':' + millisec % 60;

        return resultDuration || "Ууу, это на долго...";
    }

    getImage() {
        let imgFalse = <p className="card__par">Oops, image is unavailable</p>;
        let imgTrue = <img className="card__img"
                           src={this.props.artworkUrl100.replace('100x100', '300x300')}
                           alt={this.props.collectionName}/>;
        return imgTrue || imgFalse;
    }

    render() {
        return (
            <div className="card">
                <div className="card__wrapper">
                    <div>{this.getImage()}</div>
                    <div className="card__text">
                        <p className="card__par">{this.getArtist()}</p>
                        <p className="card__par">{this.getAlbum()}</p>
                        <p className="card__par">{this.getDuration()}</p>
                    </div>
                </div>
            </div>

        )
    }
}

export {Card}