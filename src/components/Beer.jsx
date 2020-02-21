import React from 'react';
import PropTypes from "prop-types";
import bottle from '../assets/img/bottle.png'

function Beer(props) {
  const beerBoxStyle = {
    border: 'rgb(10,10,10) solid 2px',
    backgroundColor: 'rgb(50,50,50)',
    padding: '48px',
    display: 'flex',
    width: '75%',
    margin: '20px auto',
    height: '216px'
  }
  const beerNameStyle = {
    margin: '0',
    fontSize: '30px',
    width: '160px'
  }
  const littleText = {
    margin: '0',
    color: '#97CEA6'
  }
  const infoBoxStyle = {
    paddingRight: '25px'
  }
  const infoTextStyle = {
    textAlign: 'right',
    color: 'rgb(150,150,255)',
  }
  const bottleStyle = {
    height: '112px',
    width: 'auto',
    display: 'block',
marginLeft: 'auto',
marginRight: 'auto',
marginBottom: '10px'
  }
  const leftStyle = {
    marginRight: '25px',
    width: '100px'
  }

  const sellPintButtonStyle = {
    width: '72px',
    height: '50px'
  }

  function sellPint(){
    props.onSellPint();
  };

  return(
    <div style={beerBoxStyle}>
      <div style={leftStyle}>
        <img style={bottleStyle} src={bottle} alt="bottle graphic"/>
        <button style={sellPintButtonStyle} onClick={sellPint}>Sell Pint</button>
      </div>
      <div style={infoBoxStyle}>
        <h3 style={beerNameStyle}>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p style={littleText}>Price: <em style={infoTextStyle}>{props.price}</em></p>
        <p style={littleText}>Alcohol Content: <em style={infoTextStyle}>{props.alcoholContent}</em></p>
        <p style={littleText}>Type: <em style={infoTextStyle}>{props.type}</em></p>
        <p style={littleText}>Pints Left: <em style={infoTextStyle}>{props.pintsLeft}</em></p>
      </div>
      <p><em>{props.promoText}</em></p>
    </div>
  )
};

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  promoText: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  onSellPint: PropTypes.func.isRequired
};

export default Beer;
