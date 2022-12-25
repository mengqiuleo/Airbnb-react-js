/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 17:45:47
 * @LastEditTime: 2022-12-25 18:06:01
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header/index'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <div className='longfor-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city} />
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor