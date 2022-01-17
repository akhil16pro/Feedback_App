import PropTypes from "prop-types";
import React from 'react';
import { NavLink} from 'react-router-dom'

function Header({text, bgColor, textColor}) {

    const  headStyle = {
        backgroundColor : bgColor,
        color : textColor
    }
    return (
        <header style={headStyle} >
            <div className="nav">
                <h1 style={{margin : 0}}>{text}</h1>

                <div className="menu_wrap">
                    <NavLink  to="/"  className="link_">
                        <span>Home</span>
                    </NavLink>
                    <NavLink  to="/about"  className="link_">
                        <span>About</span>
                    </NavLink>
                </div>
                {/* <Link to="/about" className="ab_link">About us</Link> */}
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor : 'rgba(0,0,0,.2)',
    textColor : '#ff6a95'
  };

  Header.propTypes = {
      text: PropTypes.string,
      bgColor: PropTypes.string,
      textColor: PropTypes.string,
      
  }

export default Header
