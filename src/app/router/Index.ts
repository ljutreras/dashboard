import { DeleteUserController } from "@app/controller/user/delete/DeleteUserController";
import { GetAllUserController } from "@app/controller/user/get/GetAllUserController";
import { GetUserController } from "@app/controller/user/get/GetUserController";
import { CreateUserController } from "@app/controller/user/post/CreateUserController";
import bodyParser from "body-parser";
import express from "express";

export const router = express.Router()

router.get('/', GetAllUserController)
router.get('/:email', GetUserController)
router.post('/', bodyParser.json(), CreateUserController)
router.delete('/:email', bodyParser.json(), DeleteUserController)
