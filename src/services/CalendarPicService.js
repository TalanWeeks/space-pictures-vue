import { logger } from '../utils/Logger.js'
import axios from 'axios'
import { AppState } from '../AppState'

const apiKey = 'api_key=LUaAZ8ahtkNmFfCTlcAGc7O4pKbzgVUDf2tnQtCF'

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod/',
  timeout: 10000
})

class CalendarPicService {
  async findPicByDate(query) {
    const res = await nasaApi.get(`?${apiKey}&date=${query}`)
    logger.log('the res', res.data.url)
    AppState.img = res.data.url
    AppState.date = res.data.date
    AppState.description = res.data.explanation
  }
}
export const calendarPicService = new CalendarPicService()
