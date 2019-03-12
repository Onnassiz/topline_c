import React from 'react';
import PropTypes from 'prop-types';

const Brand = (props) => {
  const { brand } = props;
  return (
    <div className="card" style={{ height: 355 }}>
      <div className="cardTop">
        <img src="https://res.cloudinary.com/onnassiz/image/upload/v1552409115/Brand_day38r.png" alt="" />
      </div>
      <div className="cardBottom">
        <div className="cardText">
          <h4 className="cardTitle">{brand.name}</h4>
          <h5>Location - </h5>
          <h6 className="cardInfo">{brand.country}</h6>
          <br />
          <h5>Available Items - </h5>
          <h6 className="cardInfo">{brand.numberOfItems}</h6>
        </div>
      </div>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Brand;
