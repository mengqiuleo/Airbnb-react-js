/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 13:18:40
 * @LastEditTime: 2022-12-25 03:53:20
 */
import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommandInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommandInfoAction(state, { payload }) {
      state.recommendInfo = payload
    }
  },
  // extraReducers: { //* 这里的作用就是将发送网络拿到的东西放到redux中
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     console.log(payload)
  //     state.goodPriceInfo = payload
  //   }
  // }
})

export const { 
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommandInfoAction  
} = homeSlice.actions

export default homeSlice.reducer