import React from 'react';
import PropType from 'prop-types';

const Card = (props) => {
  const { shirt } = props;
  return (
    <div className="card">
      <div className="cardTop">
        <img src={shirt.imageLink} alt="" />
      </div>
      <div className="cardBottom">
        <div className="cardText">

          <h3 className="cardTitle">{shirt.name}</h3>
          <h4 className="cardInfo">{shirt.price}</h4>
          {/* Only visible when parent element is hovered over */}
          <div className="cardHoverText">
            <h6>Colors</h6>
            <div className="colors">
              { shirt.colors.map(color => <div className="color" style={{ backgroundColor: color }} />) }
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
};

Card.propTypes = {
  shirt: PropType.object.isRequired,
};

export default Card;
