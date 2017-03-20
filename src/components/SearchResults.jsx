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
    <div className="col s8">
      <h3 className="header flow-text">Search Results</h3>
        <div className="row">
          { results.map((result, i) => {
            return (
          <div className="col m4">
            <div key={i} className="card horizontal z-depth-2">
              <div className="card-image">
                <img alt="Poster" src={result.poster}></img>
              </div>
              <div className="card-content">
                <p className="flow-text">Title: {result.show_title}</p>
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
