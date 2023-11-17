import bodyParser from "body-parser";
import express from "express";
import { DeleteUserController } from "../controller/user/delete/DeleteUserController";
import { GetAllUserController } from "../controller/user/get/GetAllUserController";
import { CreateUserController } from "../controller/user/post/CreateUserController";
import { GetUserController } from "../controller/user/post/GetUserController";

export const router = express.Router()

router.get('/all', GetAllUserController)
router.post('/',  bodyParser.json(), GetUserController)
router.post('/create', bodyParser.json(), CreateUserController)
router.delete('/:email', bodyParser.json(), DeleteUserController)
