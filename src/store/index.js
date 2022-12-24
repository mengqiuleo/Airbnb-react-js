/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 13:12:35
 * @LastEditTime: 2022-12-24 13:32:35
 */
import { configureStore } from "@reduxjs/toolkit"
import homeReducer from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store