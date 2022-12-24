/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 01:11:17
 * @LastEditTime: 2022-12-25 02:53:39
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '@/components/room-item'
import {RoomWrapper} from './style'

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props

  return (
    <RoomWrapper className='room-list'>
      {
        roomList?.slice(0,8).map(item => {
          return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>
        })
      }
    </RoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms