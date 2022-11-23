/* eslint-disable max-len */
import {
  Card, Col, Input, Row,
} from 'antd';
import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
      <div className="search-crypto">
        <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
      </div>
      )}
      {cryptos && (
        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="crypto-image" src={currency.iconUrl} alt="Anything" />}
                  hoverable
                >
                  <p>
                    Price:
                    {millify(currency.price)}
                  </p>
                  <p>
                    Market Cap:
                    {millify(currency.marketCap)}
                  </p>
                  <p>
                    Daily Change:
                    {millify(currency.change)}
                    %
                  </p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

Cryptocurrencies.propTypes = {
  simplified: PropTypes.bool.isRequired,
};

export default Cryptocurrencies;
