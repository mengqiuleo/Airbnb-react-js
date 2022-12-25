/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 16:22:23
 * @LastEditTime: 2022-12-25 17:16:35
 */
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'

import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/left-arrow-svg'
import IconArrowRight from '@/assets/svg/right-arrow-avg'

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [ showRight, setShowRight ] = useState(false)
  const [posIndex, setPosIndex ] = useState(0)
  const totalDistanceRef = useRef()

  // 组件渲染完毕后，判断是否渲染右边的按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  function controlClickHandle(isRight){
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    setShowRight(totalDistanceRef.current > newOffsetLeft) //是否继续显示右侧的按钮
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      { showLeft && (
        <div className='control left' onClick={e =>  controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>  
      ) }
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div> 
      ) }

      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView