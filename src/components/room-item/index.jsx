/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 00:27:58
 * @LastEditTime: 2022-12-25 02:52:53
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props

  return (
    <ItemWrapper verifyColor={itemData.verify_info?.text_color || '39576a'}
      itemWidth={itemWidth}
    >
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages?.join(" - ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem