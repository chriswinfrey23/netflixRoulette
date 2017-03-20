import React, {Component} from 'react';
import logo from '../images/Netflix_icon.png'

class Header extends Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper z-depth-2">
          <a href="#" className="logo"><img alt="NetflixRoulette" style={{marginLeft: "10px"}} src={logo}></img></a>
        </div>
      </nav>
    )
  }
}

export default Header;
