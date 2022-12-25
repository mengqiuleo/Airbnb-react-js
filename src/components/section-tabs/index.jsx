/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 02:56:25
 * @LastEditTime: 2022-12-25 16:26:49
 */
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import {TabsWrapper} from './style'
import ScrollView from '@/base-ui/scroll-view/index'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, name){
    setCurrentIndex(index)
    tabClick(index, name)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div 
                key={item}
                className={classNames("item", { active: index === currentIndex})}
                onClick={e => itemClickHandle(index, item)}
              >
                {item}
              </div>  
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs