import config from '@app/config/Index'
import StatusCode from '@context/shared/constants/StatusCode';
import { MongoRepository } from '@context/shared/persistance/MongoRepository';
import { Request, Response } from "express"

export const DeleteUserController = async (req: Request, res: Response) => {
    try {
        const user = MongoRepository.create(config.DATABASE, config.COLLECTION).connectToDatabase();
        const email = req.params.email;
        if (!email) return res.status(StatusCode.BAD_REQUEST).json({ error: 'El parámetro "email" es requerido.' });
        const result = await user.deleteOne({ email });
        if (result.deletedCount === 0) return res.status(StatusCode.BAD_REQUEST).json({ error: 'No se encontró el usuario.' });
        return res.status(StatusCode.OK).json({ mensaje: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json();
    }
};