import React, { useState, useEffect } from 'react'
import CryptoPanelSub from './CryptoPanelSub';

import { Collapse } from 'antd'

import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Panel } = Collapse;

const CryptoPanel = ({ uuid }) => {
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid)
  const cryptoData = data?.data?.coin
  // const [cryptoData, setCryptoData] = useState({})

  // useEffect(() => {
  //   setCryptoData(data?.data?.coin)
  // }, [data])
  
  return (
    <Panel
    key={uuid}
    header={(
      <CryptoPanelSub cryptoData={cryptoData}/>
      )}
    >
    {/* {HTMLReactParser(cryptoData.description || '')} */}
    </Panel>
  )
}

export default CryptoPanel