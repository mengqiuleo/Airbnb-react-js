/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 14:46:10
 * @LastEditTime: 2022-12-24 15:13:08
 */
import React, { memo } from 'react'
import { LeftWrapper } from './style'

import IconLogo from '@/assets/svg/logo-svg'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft