import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Card from '../partials/Card';

const BrandTops = (props) => {
  const { match } = props;

  const BRANDTOPS = gql`
  query {
    brands(brandId: ${match.params.brand_id}) {
      id,
      name,
      numberOfItems,
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
  }
`;
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <Query query={BRANDTOPS}>
          {
                  ({ loading, error, data }) => {
                    if (!loading) {
                      if (error) return <p>Error</p>;
                      const brand = data.brands[0];
                      return (
                        <div className="w-100">
                          <h1 className="mb-0">
                            <span className="text-primary">{brand.name}</span>
                          </h1>
                          <p className="lead">{`${brand.numberOfItems} items`}</p>
                          <div className="cards">
                            { brand.shirts.map(shirt => <Card shirt={shirt} key={shirt.id} />) }
                          </div>
                        </div>
                      );
                    }
                    return <div>Loading...</div>;
                  }
                }
        </Query>
      </section>
    </div>
  );
};

BrandTops.propTypes = {
  match: PropTypes.object.isRequired,
};

export default BrandTops;
