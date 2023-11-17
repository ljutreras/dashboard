import config from "@app/config/Index";
import cors from 'cors';
import { router } from "@app/router/Index";
import { MongoConnection } from '@context/shared/persistance/MongoConnection'
import express from 'express';

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['*'],
    allowedHeaders: ['Content-Type'],
}

app.use(cors(corsOptions));

app.use('/user', router)

MongoConnection.create()

app.listen(config.PORT, () => {
    console.log('Estas en el puerto ', config.PORT)
}) 