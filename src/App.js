import React from 'react';
import './App.css';
import { Layout, Space, Typography } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import {
  Cryptocurrencies, CryptoDetails, Homepage, Navbar, News,
} from './components';
import './index.css';
import Carousel from './components/Carousel';

const App = () => (
  <div>
    <Navbar />
    <Carousel />
    <div className="app">
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies simplified={false} />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News simplified={false} />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Copyright © 2021
            <Link to="/">
              Cryptoverse Inc.
            </Link>
            {' '}
            <br />
            <p>All Rights Reserved.</p>
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  </div>
);

export default App;
