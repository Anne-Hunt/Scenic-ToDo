
/**@params {{completed: Boolean, description: String}} */
export class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
    }
    get ListTemplate() {
        return `
<div>
    <form>
        <input type="checkbox" class="rounded" name="check">
    </form>
    <span>
        ${this.description}
    </span>
</div>
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
        background-image: url('${this.url}')
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
<div>
    ${this.weather}
    <p>${this.description}</p>
</div>
`
    }
}
/**@params {{quote: string, author: string, tags: [], description: string}}*/
export class Wisdom {
    constructor(data) {
        this.quote = data.quote /* may be content instead of body*/
        this.author = data.author
        this.tags = data.tags
        this.description = data.description
    }
    get WisdomTemplate() {
        return `
<div>
    <p>${this.quote}</p>
    <h5>${this.author}</h5>
</div>
`
    }
}

export class Time {
    constructor(data) {
        this.date = Date()
    }
}