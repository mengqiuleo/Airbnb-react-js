/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 14:06:17
 * @LastEditTime: 2022-12-24 14:50:53
 */
import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight/>
    </HeaderWrapper>
  )
})

export default AppHeader