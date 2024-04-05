
/**@params {{completed: Boolean, description: String}} */
export class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
        this.id = data.id
    }
    get ListTemplate() {
        return `
<div>
    <form>
        <input type="checkbox" class="rounded" name="check" ${this.completed ? 'checked' : ''} onclick="app.ToDoController.checkToDo('${this.id}')">
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

/**@params {{weather: [], name: string, main: Number, description: []}} */
export class Weather {
    constructor(data) {
        this.weather = data.weather
        this.description = data.weather[0].description
        this.icon = data.weather.icon
        this.city = data.name
        this.temperature = data.main.temp
        this.feelslike = data.main.feels_like
    }
    get WeatherTemplate() {
        return `
        <div>
        <div class="card bg-black rounded outline-white text-white row">
            <div class="col-6">
                <span class="d-none">${this.Celcius}</span>
                <span>${this.Fahrenheit}</span>
                <span>${this.description}</span>
            </div>
            <div class="col-6">
                <span>
                    ${this.city}
                </span>
                <img src="${this.icon}">
            </div>
        </div>
    </div>
`

    }

    get Celcius() {
        let temp = this.temperature - 273.15
        let celciusTemp = Math.floor(temp)
        return celciusTemp
    }

    get Fahrenheit() {
        let celciusTemp = this.temperature - 273.15
        let temp = Math.floor((celciusTemp * (9 / 5)) + 32)
        return temp
    }
}

/**@params {{quote: string, author: string, tags: [], description: string}}*/
export class Wisdom {
    constructor(data) {
        this.quote = data.content
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
    get QuoteText() {
        return
    }
}

// export class Clock {
//     constructor() {
//         this.time = new Date()
//     }

//     get TimeNow() {
//         return `
//         <h1>${this.ClockTime}</h1>
//         `
//     }
//     get ClockTime() {
//         return this.time.toLocaleTimeString
//     }
// }
