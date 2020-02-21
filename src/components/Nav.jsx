import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    // position: 'relative',
    // top: '55px',
    // right: '290px'
    padding: '0px 45px',
  }
  const linkStyle = {
    paddingRight: '12px',
    color: '#DDDBA9',
    textDecoration: 'none'
  }
  return(
    <div style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/beers">Beers on tap</Link>
      <Link style={linkStyle} to="/newbeer">Add a Beer</Link>
    </div>
  )
}

export default Nav;
