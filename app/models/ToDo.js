
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
    <a class="fs-5" onclick="app.ToDoController.deleteToDo('${this.id}')"><i class="mdi mdi-delete-circle-outline"></i></a>
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
        <div class="row bg-black opacity-100 rounded outline-white text-white justify-content-center m-0 p-0">
    <div class="col-4 m-0 p-0">
        <span onclick="app.ScenicController.toggleTemp()"><span id="temp-c" class="d-none">${this.Celcius}C</span>
        <span id="temp-f" class="">${this.Fahrenheit}F</span></span><br>
        <span><small>${this.description}</small></span>
    </div>
    <div class="col-4 m-0 p-0">
            <img src="${this.icon}">
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
    <h4>${this.quote}</h4>
    <h5 id="author" class="d-none">${this.author}</h5>
`
    }
}

