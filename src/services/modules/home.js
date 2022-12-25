/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 23:44:32
 * @LastEditTime: 2022-12-25 18:08:04
 */
import myRequest from "..";

export function getHomeGoodPriceData() {
  return myRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return myRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return myRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return myRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return myRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlusData() {
  return myRequest.get({
    url: "/home/plus"
  })
}