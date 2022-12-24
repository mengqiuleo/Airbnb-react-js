/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-23 19:48:02
 * @LastEditTime: 2022-12-23 19:58:36
 */
import {Navigate} from "react-router-dom"
import React from "react"

const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/entire",
    element: <Entire/>
  },
  {
    path: "/detail",
    element: <Detail/>
  }
]

export default routes