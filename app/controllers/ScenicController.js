import { AppState } from "../AppState.js";
import { scenicService } from "../services/ScenicService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class ScenicController {
    constructor() {
        AppState.on('account', this.getScenic)
        AppState.on('account', this.getWeather)
        AppState.on('account', this.getWisdom)
        AppState.on('scenic', this.drawScenic)
        AppState.on('wisdom', this.drawWisdom)
        AppState.on('weather', this.drawWeather)
        this.clockTimer()
    }


    async getWeather() {
        try {
            console.log("scenic controller to access service weather")
            await scenicService.getWeather()
        } catch (error) {
            Pop.toast("Can't access weather at the mo", "error")
            console.log(error)
        }
    }

    async getWisdom() {
        try {
            console.log("scenic controller to access service wisdom")
            await scenicService.getWisdom()
        } catch (error) {
            Pop.toast("Can't access quotes at the mo", "error")
            console.log(error)
        }

    }

    async getScenic() {
        try {
            console.log("scenic controller to access service scenery")
            await scenicService.getScenic()
        } catch (error) {
            Pop.toast("Can't access scenery at the mo", "error")
            console.log(error)
        }
    }

    drawScenic() {
        console.log('drawing scene')
        let apiImg = AppState.scenic.ScenicTemplate
        const scenery = document.getElementById('bckimg')
        scenery.setAttribute('style', apiImg)
    }

    drawWeather() {
        console.log('drawing weather')
        setHTML('weather', AppState.weather.WeatherTemplate)
        console.log(AppState.weather)
    }

    drawClock() {
        // console.log('clock time')
        const rawTime = new Date()
        const time = rawTime.toLocaleTimeString()
        setHTML('time', time)
        // console.log('time', time)
    }

    clockTimer() {
        setInterval(this.drawClock, 1000)
    }

    drawWisdom() {
        console.log('wisdom entering the draw')
        setHTML('wisdom', AppState.wisdom.WisdomTemplate)
        console.log(AppState.wisdom.quote)
    }

    toggleTemp() {


    }
}
