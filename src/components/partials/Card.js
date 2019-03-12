import React, { Component } from 'react';
import PropType from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState(prevState => ({ expand: !prevState.expand }));
  }

  render() {
    const { shirt } = this.props;
    const { expand } = this.state;
    const cardHoverText = {
      visibility: 'visible',
      transition: '0.4s all ease',
      transitionDelay: '0.1999s',
    };

    const cardBottom = {
      transition: '0.4s all ease',
      height: '65%',
      opacity: 1,
      overflowY: 'scroll',
    };

    const cardTop = {
      height: '35%',
      opacity: 0.8,
      transition: '0.4s all ease',
    };

    return (
      <div className="card" onClick={this.toggleExpand} onKeyDown={this.toggleExpand}>
        <div className="cardTop" style={expand ? cardTop : {}}>
          <img src={shirt.imageLink} alt="" />
        </div>
        <div className="cardBottom" style={expand ? cardBottom : {}}>
          <div className="cardText">

            <h3 className="cardTitle">{shirt.name}</h3>
            <h4 className="cardInfo">{shirt.price}</h4>
            <div className="cardHoverText" style={expand ? cardHoverText : {}}>
              <h6>Colors</h6>
              <div className="colors">
                { shirt.colors.map(color => <div className="color" key={color} style={{ backgroundColor: color }} />) }
              </div>
              <div className="availability">
                <h6>Availability - </h6>
                {shirt.totalItem}
              </div>
              <div className="sizes">
                <h6>Sizes - </h6>
                { shirt.sizes.join(', ') }
              </div>
              <div className="brand">
                <h6>Brand - </h6>
                { shirt.brand.name }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  shirt: PropType.object.isRequired,
};

export default Card;
