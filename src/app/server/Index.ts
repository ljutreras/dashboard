import config from "@app/config/Index";
import { router } from "@app/router/Index";
import { MongoConnection } from '@context/shared/persistance/MongoConnection'
import express from 'express';

const app = express();

app.use('/user', router)

MongoConnection.create()

app.listen(config.PORT, () => {
    console.log('Estas en el puerto ', config.PORT)
}) 