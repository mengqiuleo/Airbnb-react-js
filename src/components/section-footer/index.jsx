/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 03:56:40
 * @LastEditTime: 2022-12-25 18:25:31
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/right-arrow-avg'
import { useNavigate } from 'react-router-dom'


const SectionFooter = memo((props) => {
  const { name } = props

  let showMessage = "显示全部"
  if(name){
    showMessage = `显示更多${name}房源`
  }

  const navigate = useNavigate()
  function moreClickHandle(){
    navigate("/entire")
  }

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow/>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter