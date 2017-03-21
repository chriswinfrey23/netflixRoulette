import React, { Component } from 'react';


class SearchResults extends Component {

  componentWillReceiveProps(nextProps) {
    (this.props.results !== nextProps.results)
  }

  render () {

    let results = this.props.results

    if(!results) {return null;}

    console.log(results);

    return (
    <div>
      <h3 className="header flow-text">{"Search Results" + " for " + "'" + this.props.searchTerm + "'"}</h3>
      <div className="row">
          { results.map((result, i) => {
            return (
          <div className="col m10">
            <div key={i} className="card horizontal z-depth-2">
              <div className="card-image">
                <img alt="Poster" src={result.poster}></img>
              </div>
              <div className="card-content">
                <h3 className="flow-text"><b>{result.show_title}</b></h3>
                <p className="flow-text">Director: {result.director}</p>
                <p className="flow-text">Cast: {result.show_cast}</p>
                <p className="flow-text">Summary: {result.summary}</p>
              </div>
              <div className="card-action">
              </div>
            </div>
          </div>
          )
        })
      }
      </div>
    </div>
    )
  }
}

export default SearchResults;
