/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-23 19:52:28
 * @LastEditTime: 2022-12-25 03:54:14
 */
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'

import HomeSectionV1 from './c-cpns/home-section-v1'

import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'


const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo
  }), shallowEqual)

  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])



  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}

        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home