import React from "react";
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from "./components";
import './App.css';
import { Layout, Space, Typography } from "antd";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/exchanges" element={<Exchanges />} />
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route exact path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                        <Link to="/">
                            Cryptoverse Inc.
                        </Link> <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
