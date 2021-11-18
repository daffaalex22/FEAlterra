import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: 'https://fleet-glider-91.hasura.app/v1/graphql',
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "1Vi3QzTHMEFZaPiJMgBvm5zlmMkBjpX9K1HWvzHfJnHrO9PY1o3TO2Vdllf19Rxw"
  }
});

const wsLink = new WebSocketLink({
  uri: 'wss://fleet-glider-91.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": "1Vi3QzTHMEFZaPiJMgBvm5zlmMkBjpX9K1HWvzHfJnHrO9PY1o3TO2Vdllf19Rxw"
      }
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
