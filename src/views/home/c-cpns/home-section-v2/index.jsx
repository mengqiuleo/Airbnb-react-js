/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 03:22:15
 * @LastEditTime: 2022-12-25 04:08:22
 */
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'

import SectionHeader from '@/components/section-header/index'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  // * 解决hook初始化定义不能为空的问题
  // const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ""
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  // 数据格式的转换
  const tabNames = infoData.dest_address?.map(item => item.name)
  // 实现子传父：首先父给子串一个函数，子调用这个函数
  const tabClickHandle = useCallback(function(index, name) {
    setName(name)
  }, [])
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%"/>
      <SectionFooter  name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2