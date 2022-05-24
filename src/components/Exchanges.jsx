//External imports
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//UI
import { Col, Row, Select, Typography } from 'antd';

//Internal Imports
import CryptoPanel from './CryptoPanel';
import Loader from './Loader'

//API
import { useGetCryptosQuery } from '../services/cryptoApi';

//Actions
import { navbarChange } from '../app/slice';

//Shortcut
const { Option } = Select;


const Exchanges = () => {
  //Hooks
  const dispatch = useDispatch();
  
  //State
  const [numberCryptos, setNumberCryptos] = useState(1)

  const { data:coinList, isFetching } = useGetCryptosQuery(numberCryptos);
  const uuids = coinList?.data?.coins?.map(coin => coin.uuid)

  const options = [1, 3, 5]

  useEffect(() => {
    dispatch(navbarChange("Exchanges"))
  }, [])

  if(isFetching) return <Loader />

  return (
    <>
      <Typography.Title level={5}>
        Due to limitations of the *free plan* from the API used, this page is no longer functional as it should. At the moment is reclycling data that could be obtained from other pages through multiples fetch operation. That's why this page has a very limited number of cryptocurrencies (otherwise the API would restrain the connection due to the huge ammount of petitions / the page would take too long to load as there would have to be a timeOut between calls)
      </Typography.Title>
      <div className='m5-p5'>
      <Typography.Text className='m5-p5'>
        Number of Cryptocurrencies to show:
      </Typography.Text>
      <Select
        defaultValue={numberCryptos}
        className='select-time-period' 
        placeholder="Select number of Cryptos"
        onChange={value => setNumberCryptos(value)}
      >
        {options.map(choice => <Option key={choice} value={choice}>{choice}</Option>)}
      </Select>
      </div>
      <Row>
        <Col span={6}>Cryptocurrencies by Ranking</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Actual Markets</Col>
        <Col span={6}>Change 24h</Col>
      </Row>
      <Row>
        <Col span={24}>
          {uuids?.map((uuid,i) => <CryptoPanel uuid={uuid} key={i}/>)}
        </Col>
      </Row>
    </>
  )
}

export default Exchanges