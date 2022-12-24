/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-24 13:33:55
 * @LastEditTime: 2022-12-24 13:41:16
 */
import axios from "axios";
import { BASE_URL, TIMEOUT } from './config'

class MYRequest {
  constructor(baseURL, timeout){
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config){
    return this.request({ ...config, method: "get"})
  }

  post(config){
    return this.request(({ ...config, method: "post" }))
  }
}

export default new MYRequest(BASE_URL, TIMEOUT)