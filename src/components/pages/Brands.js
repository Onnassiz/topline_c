import React, { Component } from 'react';

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: []
    };
  }

  render() {
    return(
      <div>
        This are brands
      </div>
    );
  }
}

export default Brands;