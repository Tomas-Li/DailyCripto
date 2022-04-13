import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

import { Col, Row, Typography } from 'antd'


const { Title } = Typography

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.unshift(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.unshift(new Date(Number(coinHistory?.data?.history[i].timestamp)*1000).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp, //X-Axis
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice, //Y-Axis
        fill: false,
        backgroundColor: '#000',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    responsive: true
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options}/>
    </>
  );
};

export default LineChart