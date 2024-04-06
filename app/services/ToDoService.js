import { AppState } from '../AppState.js'
import { Todo } from '../models/ToDo.js'
import { api } from './AxiosService.js'

class ToDoService {

    async getToDos() {
        const response = await api.get('api/todos')
        console.log('ran service on gettodo', response)
        const myToDos = response.data.map(todo => new Todo(todo))
        AppState.todos = myToDos
    }

    async createToDo(data) {
        const response = await api.post('api/todos', data)
        console.log(response, data)
        const newToDo = new Todo(data)
        AppState.todos.push(newToDo)
        console.log('created a todo in appstate', AppState.todos)
    }

    async completeToDo(id) {
        const toDoToCheck = AppState.todos.find(todo => todo.id == id)
        console.log('todo found')
        toDoToCheck.completed = !toDoToCheck.completed
        console.log(toDoToCheck)
        let apiCheckItem = id
        const response = await api.put(`api/todos/${apiCheckItem}`, toDoToCheck)
        console.log(response, id)
        AppState.emit('todos')
    }

    async deleteToDo(data) {
        const todoDelete = AppState.todos.find(todo => todo.description == data)
        const response = await api.delete('api/todos', todoDelete)
        console.log('delete', response)
    }

    getIncompleteCount() {
        let incompleteCount = 0
        for (let i = 0; i < AppState.todos.length; i++) {
            let todo = AppState.todos[i]
            if (todo.completed != true) incompleteCount++
        }
        AppState.incompleteCount = incompleteCount
        return incompleteCount
    }
}

export const todoService = new ToDoService()