import { AppState } from "../AppState.js";
import { todoService } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


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
            const form = event.target
            const toDoData = getFormData(form)
            console.log('formdata processed in controller, sending to service', toDoData)
            await todoService.createToDo(toDoData)
            // @ts-ignore
            document.getElementById('todo-list').reset()
        } catch (error) {
            Pop.toast("Oh no! It didn't go!", "error")
            console.log(error)
        }
    }

    async checkToDo() {
        event.preventDefault()
        try {
            const checkbox = event.target
            const check = getFormData(checkbox)
            console.log('see a check is made, sending to service', check)
            await todoService.completeToDo(check)
            // this.drawCheckedToDo()
        } catch (error) {
            Pop.toast("Can't do that right now, sorry!", "error")
            console.log(error)
        }
    }

    async showToDoFunctions() {
        const account = AppState.account
        if (account) {
            const toDoElem = document.getElementById('to-do')
            toDoElem.classList.remove('d-none')
            const toDoForm = document.getElementById('to-do-form')
            toDoForm.classList.remove('d-none')
        }
    }

    drawToDos() {
        console.log('drawing todos')
        let toDoList = ''
        AppState.todos.forEach(todo => toDoList += todo.ListTemplate)
        // AppState.todos.filter(todo => todo.complete == false).forEach(todo => toDoList += todo.ListTemplate)
        setHTML('todo-list', toDoList)
    }

    drawCheckedToDo() {
        let completedList = ''
        AppState.todos.filter(todo => todo.complete == true).forEach(todo => completedList += todo.CompletedListTemplate)
        setHTML('completed-list', completedList)
    }

    async deleteToDo(description) {
        try {
            const result = await Pop.confirm("Do you really want to delete this?")
            if (result == false) return

            console.log('confirmed delete, going to service')
            await todoService.deleteToDo(description)
        } catch (error) {
            Pop.toast("I can't delete this yet", "error")
            console.log(error)
        }

    }

}