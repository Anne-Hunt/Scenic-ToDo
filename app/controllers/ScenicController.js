import { AppState } from "../AppState.js";
import { scenicService } from "../services/ScenicService.js";
import { Pop } from "../utils/Pop.js";


export class ScenicController {
    constructor() {
        AppState.on('scenic', this.drawScenic)
        this.drawClock()
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

    }

    drawWeather() {

    }

    drawClock() {

    }

    drawWisdom() {

    }

}