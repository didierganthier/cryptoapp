// Render app
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd';
import { render } from '@testing-library/react';
import App from '../App';
import store from '../app/store';

// Write tests here
describe('App', () => {
  it('renders without crashing', () => {
    window.matchMedia = window.matchMedia || function () {
      return {
        matches: false,
        addListener: () => {},
        removeListener: () => {},
      };
    };
    const tree = render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('contains a navbar', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    );
    expect(getByText('Cryptoverse')).toBeInTheDocument();
  });
});
