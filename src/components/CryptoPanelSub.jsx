import React from 'react'
import millify from 'millify';

import { Typography, Col, Avatar } from 'antd'

const { Text } = Typography;

const CryptoPanelSub = ({ cryptoData }) => {

  console.log({cryptoData})
  if(cryptoData === undefined) return "Loading ..."

  return (
    <>
      <Col span={6}>
        <Text><strong>{cryptoData.rank}.</strong></Text>
        <Avatar className="exchange-image" src={cryptoData.iconUrl} />
        <Text><strong>{cryptoData.name}</strong></Text>
      </Col>
      <Col span={6}>$ {millify(cryptoData["24hVolume"])}</Col>
      <Col span={6}>{millify(cryptoData.numberOfMarkets)}</Col>
      <Col span={6}>Empty%</Col>
   </>
  )
}

export default CryptoPanelSub