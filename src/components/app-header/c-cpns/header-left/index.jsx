/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 14:46:10
 * @LastEditTime: 2022-12-25 20:16:27
 */
import React, { memo } from 'react'
import { LeftWrapper } from './style'

import IconLogo from '@/assets/svg/logo-svg'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClickHandle(){
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft