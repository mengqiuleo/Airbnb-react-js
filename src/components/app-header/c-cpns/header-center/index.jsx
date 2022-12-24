/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 14:48:01
 * @LastEditTime: 2022-12-24 20:26:11
 */
import React, { memo } from 'react'
import { CenterWrapper } from './style'

import IconSearchBar from '@/assets/svg/search-svg'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='search-bar'>
        <div className='text'>搜索房源和体验</div>
        <span className='icon'>
          <IconSearchBar />
        </span>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter