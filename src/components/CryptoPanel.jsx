import React, { useState, useEffect } from 'react'
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import { Collapse, Typography, Col, Avatar } from 'antd'

import Loader from './Loader'

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'

const { Text } = Typography;
const { Panel } = Collapse;

const CryptoPanel = ({ uuid }) => {
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid)
  const { data: coinHistory } = useGetCryptoHistoryQuery({coinId: uuid, timePeriod:"24h"});

  if(isFetching){
    return <Loader />
  } else {
    const cryptoData = data?.data?.coin
    return (
      <Collapse>
        <Panel
        key={uuid}
        header={(
          <>
            <Col span={6}>
              <Text><strong>{cryptoData.rank}.</strong></Text>
              <Avatar className="exchange-image" src={cryptoData.iconUrl} />
              <Text><strong>{cryptoData.name}</strong></Text>
            </Col>
            <Col span={6}>$ {millify(cryptoData["24hVolume"])}</Col>
            <Col span={6}>{millify(cryptoData.numberOfMarkets)}</Col>
            <Col span={6}>{coinHistory?.data?.change}%</Col>
          </>
          )}
        >
        {HTMLReactParser(cryptoData.description)}
        </Panel>
      </Collapse>
    )
  }
}

export default CryptoPanel