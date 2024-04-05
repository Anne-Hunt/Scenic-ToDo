import { AppState } from "../AppState.js";
import { todoService } from "../services/ToDoService.js";
import { Pop } from "../utils/Pop.js";


export class ToDoController {
    constructor() {
        AppState.on('account', this.getToDos)
        AppState.on('todos', this.drawToDos)
    }

    async getToDos() {
        try {
            await todoService.getToDos()
        } catch (error) {
            Pop.toast("Whoa pardner, your to-do is busted", "error")
            console.log(error)
        }
    }

    async createToDo() {
        event.preventDefault()
        try {
            event.target
            await todoService.createToDo()
        } catch (error) {
            Pop.toast("Oh no! It didn't go!", "error")
        }
    }

    drawToDos() {

    }

}