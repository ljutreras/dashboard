
import config from '@app/config/Index'
import StatusCode from '@context/shared/constants/StatusCode';
import { MongoRepository } from '@context/shared/persistance/MongoRepository';
import { Request, Response } from "express"

export const GetUserController = async (req: Request, res: Response) => {
    try {
        const user = MongoRepository.create(config.DATABASE, config.COLLECTION).connectToDatabase()
        const email = req.params.email
        const result = await user.findOne({email})
        if (!result) res.status(StatusCode.NO_CONTENT).json()
        res.status(StatusCode.OK).json(result);
    } catch (e) {
        console.error(e)
    }
    
}
