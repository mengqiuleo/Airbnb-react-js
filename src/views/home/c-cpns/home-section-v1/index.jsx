/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 01:37:32
 * @LastEditTime: 2022-12-25 04:07:56
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'

import SectionHeader from '@/components/section-header/index'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionRooms roomList={infoData.list} itemWidth="25%"/>
      <SectionFooter/>
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1