// Render app
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd';
import { render } from '@testing-library/react';
import App from '../App';
import store from '../app/store';

describe('Footer', () => {
  it('contains a footer', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    );
    expect(getByText('Cryptoverse Inc.')).toBeInTheDocument();
  });
});
