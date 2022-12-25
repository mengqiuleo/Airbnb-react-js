/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-25 19:46:18
 * @LastEditTime: 2022-12-25 19:47:41
 */
import myRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return myRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}