import { AccountController } from "./controllers/AccountController.js";
import { ScenicController } from "./controllers/ScenicController.js";
import { ToDoController } from "./controllers/ToDoController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ToDoController, ScenicController],
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




