/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Col, Row, Typography } from 'antd';
import React from 'react';
// import PropTypes from 'prop-types';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName}
          {' '}
          Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}
            %
          </Title>
          <Title level={5} className="current-price">
            Current
            {' '}
            {coinName}
            {' '}
            Price: $
            {' '}
            {currentPrice}
          </Title>
        </Col>
      </Row>
    </>
  );
};

// LineChart.PropTypes = {
//   coinHistory: PropTypes.array.isRequired,
//   currentPrice: PropTypes.number.isRequired,
//   coinName: PropTypes.string.isRequired,
// };

export default LineChart;
