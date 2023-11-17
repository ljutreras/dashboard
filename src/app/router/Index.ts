import { DeleteUserController } from "@app/controller/user/delete/DeleteUserController";
import { GetAllUserController } from "@app/controller/user/get/GetAllUserController";
import { GetUserController } from "@app/controller/user/post/GetUserController";
import { CreateUserController } from "@app/controller/user/post/CreateUserController";
import bodyParser from "body-parser";
import express from "express";

export const router = express.Router()

router.get('/all', GetAllUserController)
router.post('/',  bodyParser.json(), GetUserController)
router.post('/create', bodyParser.json(), CreateUserController)
router.delete('/:email', bodyParser.json(), DeleteUserController)
