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
      <h3 className="header">{"Displaying " + results.length + " results " + " for " + "'" + this.props.searchTerm + "'"}</h3>
          { results.map((result, i) => {
            return (
        <div className="row">
          <div className="col m12">
            <div>
              <div className="col m4">
                <img key={i} className="materialboxed" style={{height: "250px", width:"200px", marginTop: "25px"}} src={result.poster}></img>
              </div>
              <div style={{marginTop: "1%"}} className="col m8">
                <ul className="collection with-header">
                  <li className="collection-header"><h4>{result.show_title}</h4></li>
                  <li className="collection-item">{"Director:" + " " + result.director}</li>
                  <li className="collection-item">{"Starring:" + " " + result.show_cast}</li>
                  <li className="collection-item">{"Summary:"+ " " + result.summary}</li>
                  {/*<li className="collection-item">Alvin</li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
            )
          })
        }
    </div>
    )
  }
}

export default SearchResults;
