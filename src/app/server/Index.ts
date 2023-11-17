import config from "../config/Index";
import cors from 'cors';
import express from 'express';
import { MongoConnection } from "../../context/shared/persistance/MongoConnection";
import { router } from "../router/Index";

const app = express();
const corsOptions = {
    origin: 'fe-readconnect.vercel.app',
    methods: ['*'],
    allowedHeaders: ['Content-Type'],
}

app.use(cors(corsOptions));

app.use('/user', router)

MongoConnection.create()

app.listen(config.PORT, () => {
    console.log('Estas en el puerto ', config.PORT)
}) 