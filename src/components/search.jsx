import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ""}
  }

  handleChange = (event) => {
  this.setState({
    search: event.target.value
    })
  }

  render() {

    return (
    <div className="container" style={{marginTop: "25px"}}>
      <div className="row">
        <div className="col s6 push-s2">
          <input placeholder="Enter the name of an Actor"
                 onChange={this.handleChange}
                 value={this.state.search}
                 id="icon_prefix"
                 ref="search"
                 type="text"
                 className="validate">
          </input>
        </div>
        <button className="btn waves-effect waves-light col s2 push-s2" type="submit" name="action">Submit</button>
      </div>
    </div>
    )
  }
}

export default Search;
