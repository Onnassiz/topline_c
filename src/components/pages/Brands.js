import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Brand from '../partials/Brand';

const BRANDS = gql`
  query {
    brands {
      id,
      name,
      country,
      numberOfItems,
    }
  }
`;


const Brands = () => (
  <div className="container-fluid p-0">
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">
              Top
          <span className="text-primary">Brands</span>
        </h1>
        <p className="lead">Bringing the best tastes from the best brands </p>
        <div className="cards">
          <Query query={BRANDS}>
            {
                  ({ loading, error, data }) => {
                    if (!loading) {
                      if (error) return <p>Error</p>;
                      return data.brands.map(brand => (
                        <Brand brand={brand} key={brand.id} />
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
export default Brands;
