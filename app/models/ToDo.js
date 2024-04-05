
/**@params {{completed: Boolean, description: String}} */
export class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
    }
    get ListTemplate() {
        return `
        `
    }
}

/**@params {{author: string, imgUrl: string, largeImgUrl: string, url: string}} */
export class Scenic {
    constructor(data) {
        this.author = data.author
        this.imgUrl = data.imgUrl
        this.largeImgUrl = this.largeImgUrl
        this.url = data.url
    }
    get ScenicTemplate() {
        return `
        `
    }
}

/**@params {{weather: [], name: string, main: Number, description: string}} */
export class Weather {
    constructor(data) {
        this.weather = data.weather
        this.description = data.weather.description
        this.name = data.name
        this.main = data.main
    }
    get WeatherTemplate() {
        return `
        
        `
    }
}
/**@params {{quote: string, author: string, tags: [], description: string}}*/
export class Wisdom {
    constructor(data) {
        this.quote = data.quote.body /* may be content instead of body*/
        this.author = data.author
        this.tags = data.tags
        this.description = data.description
    }
    get WisdomTemplate() {
        return `
        `
    }
}