// Render app
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd';
import { fireEvent, render } from '@testing-library/react';
import { Navbar } from '../components';

describe('Navbar', () => {
  it('navbar contains 4 links', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container.querySelectorAll('a').length).toBe(4);
  });

  it("fire event on 'Home' link", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    fireEvent.click(container.querySelector('a'));
    expect(container.querySelector('a').textContent).toBe('Cryptoverse');
  });
});
