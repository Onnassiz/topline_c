import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Nav from './layout/Nav';
import Main from './Main';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <Nav />
      <Main />
    </div>
  </ApolloProvider>
);

export default App;
