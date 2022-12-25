/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 18:11:30
 * @LastEditTime: 2022-12-25 18:23:09
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header/index'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemWidth="20%" itemData={item} key={item.id} />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus"></SectionFooter>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3