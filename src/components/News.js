/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Card, Col, Row, Select, Typography,
} from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const News = ({ simplified }) => {
  const { Title, Text } = Typography;
  const { Option } = Select;

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  // console.log(cryptoNews);

  if (!cryptoNews?.value) return 'Loading...';

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((currency) => <Option key={currency.uuid} value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news) => (
        <Col xs={24} sm={12} lg={8} key={news.name}>
          <Card className="news-card" title={news.name} extra={<a href={news.url} target="_blank" rel="noreferrer">More</a>} hoverable>
            <div className="news-image-container">
              <Title className="news-title" level={4}>{news.name}</Title>
              <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || 'https://www.bing.com/th?id=OVFT.9X5Zq0Z0Z0Z0Z0Z0Z0Z0Z&w=300&h=300&c=7&rs=1&qlt=80&cdv=1&pid=1.7'} alt="news" />
            </div>
            <p>
              {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
            </p>
            <div className="provider-container">
              <div>
                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || 'https://www.bing.com/th?id=OVFT.9X5Zq0Z0Z0Z0Z0Z0Z0Z0Z&w=300&h=300&c=7&rs=1&qlt=80&cdv=1&pid=1.7'} alt="news" />
                <Text className="provider-name">{news.provider[0]?.name}</Text>
              </div>
              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

News.propTypes = {
  simplified: PropTypes.bool.isRequired,
};

export default News;
