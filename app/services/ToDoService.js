import { AppState } from '../AppState.js'
import { Todo } from '../models/ToDo.js'
import { api } from './AxiosService.js'

class ToDoService {

    async getToDos() {
        let response = await api.get('api/todos')
        console.log('ran service on gettodo', response)
        const myToDos = response.data.map(todo => new Todo(todo))
        AppState.todos = myToDos
    }

    async createToDo(data) {
        let response = await api.post('api/todos', data)
        console.log(response, data)
        let newToDo = new Todo(data)
        AppState.todos.push(newToDo)
        console.log('created a todo in appstate', AppState.todos)
    }

    async completeToDo(data) {
        let response = await api.put('api/todos', data)
        console.log(response, data)
        let toDoToCheck = AppState.todos.find(todo => todo.description == data.description)
        toDoToCheck.completed = true
    }

}

export const todoService = new ToDoService()