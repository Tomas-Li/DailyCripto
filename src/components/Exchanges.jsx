import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Collapse } from 'antd';
import CryptoPanel from './CryptoPanel';

import { useGetCryptosQuery } from '../services/cryptoApi';

import { navbarChange } from '../app/slice';

const Exchanges = () => {
  const dispatch = useDispatch();
  const { data:coinList, isFetching } = useGetCryptosQuery(5);
  const uuids = coinList?.data?.coins.map(coin => coin.uuid)

  useEffect(() => {
    dispatch(navbarChange("Exchanges"))
  }, [])

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Market</Col>
        <Col span={6}>Change 24h</Col>
      </Row>
      <Row>
        <Col span={24}>
          <Collapse accordion>
            {uuids?.map(uuid => <CryptoPanel uuid={uuid}/>)}
          </Collapse>
        </Col>
      </Row>
    </>
  )
}

export default Exchanges