import { AppState } from "../AppState.js";
import { Scenic, Weather, Wisdom } from "../models/ToDo.js";
import { api } from "./AxiosService.js";


class ScenicService {
    async getScenic() {
        const response = await api.get('api/images')
        console.log('service for scene responding', response)
        const scene = response.data
        AppState.scenic = new Scenic(scene)
    }

    async getWisdom() {
        const response = await api.get('api/quotes')
        console.log('service for quotes responding', response)
        const quote = response.data
        AppState.wisdom = new Wisdom(quote)
    }

    async getWeather() {
        const response = await api.get('api/weather')
        console.log('service for weather responding', response)
        const weather = response.data
        AppState.weather = new Weather(weather)
    }
}

export const scenicService = new ScenicService()