import axios from 'axios'
const host = process.env.BASE_URL
export default {
  getNewsList: () => {
    return axios.get(host + '/zljzlj')
  }
}
