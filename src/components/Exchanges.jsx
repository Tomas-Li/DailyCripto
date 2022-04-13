import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Select } from 'antd';

import CryptoPanel from './CryptoPanel';
import Loader from './Loader'

import { useGetCryptosQuery } from '../services/cryptoApi';

import { navbarChange } from '../app/slice';


const { Option } = Select;


const Exchanges = () => {
  const [numberCryptos, setNumberCryptos] = useState(1)
  const dispatch = useDispatch();
  const { data:coinList, isFetching } = useGetCryptosQuery(numberCryptos);
  const uuids = coinList?.data?.coins.map(coin => coin.uuid)

  const options = [1, 3, 5]

  useEffect(() => {
    dispatch(navbarChange("Exchanges"))
  }, [])

  if(isFetching) return <Loader />

  return (
    <>
      <Select
        defaultValue={numberCryptos}
        className='select-time-period' 
        placeholder="Select number of Cryptos"
        onChange={value => setNumberCryptos(value)}
      >
        {options.map(choice => <Option key={choice}>{choice}</Option>)}
      </Select>
      <Row>
        <Col span={6}>Cryptocurrencies by Ranking</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Actual Markets</Col>
        <Col span={6}>Change 24h</Col>
      </Row>
      <Row>
        <Col span={24}>
          {uuids?.map(uuid => <CryptoPanel uuid={uuid}/>)}
        </Col>
      </Row>
    </>
  )
}

export default Exchanges