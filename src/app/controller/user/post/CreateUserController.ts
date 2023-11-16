import config from '@app/config/Index'
import StatusCode from '@context/shared/constants/StatusCode'
import { MongoRepository } from '@context/shared/persistance/MongoRepository'
import { UserData } from '@context/class/UserData'
import { Request, Response } from "express"

export const CreateUserController = async (req: Request, res: Response) => {
    try {
        const user = MongoRepository.create(config.DATABASE, config.COLLECTION).connectToDatabase();
        const data = UserData.create(req.body);
        const existingUser = await user.findOne({ email: data.email });
        if (existingUser) return res.status(StatusCode.BAD_REQUEST).json({ error: 'El email ya está registrado.' });
        const newUser = await user.insertOne(data);
        res.status(StatusCode.CREATED).json({ id: newUser.insertedId});
    } catch (error) {
        console.error(error);
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json();
    }
};