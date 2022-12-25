/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-23 19:52:33
 * @LastEditTime: 2022-12-25 19:56:54
 */
import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter/index'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'

const Entire = memo(() => {

  // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms />
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire