/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-16 17:19:45
 * @LastEditTime: 2022-12-24 14:07:02
 */
import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        { useRoutes(routes) }
      </div>
      <AppFooter />
    </div>
  )
})

export default App