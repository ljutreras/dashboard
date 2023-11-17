
import StatusCode from '../../../../context/shared/constants/StatusCode';
import { MongoRepository } from '../../../../context/shared/persistance/MongoRepository';
import config from '../../../config/Index'
import { Request, Response } from "express"

export const GetUserController = async (req: Request, res: Response) => {
    try {
        const user = MongoRepository.create(config.DATABASE, config.COLLECTION).connectToDatabase();
        const email = req.body.email;
        if (!email) return res.status(StatusCode.BAD_REQUEST).json({ error: 'El campo "email" es requerido en el body.' });
        const result = await user.findOne({ email });
        if (!result) return res.status(StatusCode.NO_CONTENT).json();
        return res.status(StatusCode.OK).json(result);
    } catch (e) {
        console.error(e);
    }
};