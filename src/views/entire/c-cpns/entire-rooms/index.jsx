/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 19:08:32
 * @LastEditTime: 2022-12-25 23:27:02
 */
import RoomItem from '@/components/room-item'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { RoomWrapper } from './style'

const EntireRooms = memo(() => {
  const { roomList } = useSelector((state) => ({
    roomList: state.entire.roomList
  }))

  return (
    <RoomWrapper>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item.id} />  
            )
          })
        }
      </div>

      <div className='cover'></div>
    </RoomWrapper>
  )
})

export default EntireRooms