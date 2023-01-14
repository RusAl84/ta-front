import Axios from 'axios'
import * as cfg from "../config.js";

const axios = Axios.create({
  baseURL: cfg.hosttm,
})

export default class API {
  // Получает сообщение по id
  static async getMessage(id) {
    const resp = await axios.get(`/api/Messanger/${id}`)
    return resp.data
  }

  // Отправка сообщения
  static async sendMessage(text, topic_num) {
    // console.log(topic_num)
    const resp = await axios.post(`/tmodel`, {
      text: text,
      topic_num: topic_num,
    })
    return resp.data
  }
}
