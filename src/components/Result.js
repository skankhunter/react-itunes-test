import React from 'react';
import {Card} from './Card';
import '.././css/result.css';

class Result extends React.Component {
    renderResult() {
        let results;

        if (this.props.albumName === 'all') {
            results = this.props.resultData;
        } else {
            results = this.props.resultData.filter(track => track.collectionName === this.props.albumName);
        }

        const searchText = this.props.searchText;
        let warning;

        if (searchText.length === 0) {
           warning = "No music found for " + searchText;
        }

        const alert = <p className="warning">{warning}</p>;
        const result =
            results.length > 0 ?
                <main>
                    <section className="cards">
                         { results.map((entry, index) => <Card key={index} {...entry}/>) }
                    </section>
                </main> : alert;
        return result;
    }

    render() {
        const resultsLength = this.props.resultData.length;
        const welcome = <div className="welcome"><h2>Welcome</h2><p>Use bar to search</p></div>;
        const result = resultsLength === 0 ? welcome : this.renderResult();
        return (
            result
        );

    }
}

export {Result}