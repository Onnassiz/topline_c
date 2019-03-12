import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Card from '../partials/Card';

import '../../css/card.css';

const TOPS = gql`
  query {
    shirts {
      id,
      name,
      imageLink,
      totalItem,
      price,
      sizes,
      colors,
      brand {
        name
      }
    }
  }
`;

class Tops extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
          <div className="w-100">
            <h1 className="mb-0">
              Top
              <span className="text-primary">Line</span>
            </h1>
            <p className="lead">Bringing the best men tops to your line</p>
            <div className="cards">
              <Query query={TOPS}>
                {
                  ({ loading, error, data }) => {
                    if (!loading) {
                      if (error) return <p>Error</p>;
                      return data.shirts.map(shirt => (
                        <Card shirt={shirt} key={shirt.id} />
                      ));
                    }
                    return <div>Loading...</div>;
                  }
                }
              </Query>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Tops;
