//We import configureStore to create our store
import { configureStore } from "@reduxjs/toolkit";

//We import our slices
import navbarReducer from './slice'

//We import our services and pass their reducers and middlewares to configureStore
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    navbarKey: navbarReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
  },
});