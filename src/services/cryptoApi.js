//https://rapidapi.com/Coinranking/api/coinranking1/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': process.env.CRYPTO_API_HOST,
  'X-RapidAPI-Key': process.env.CRYPTO_API_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
    }),
  })
});

//Now we can export our querries which will be automatized by redux-toolkit
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetMultiCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi;