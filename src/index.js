import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
