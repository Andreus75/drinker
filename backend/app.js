const express = require('express');
const mongoose = require('mongoose');
// // const swaggerUi = require('swagger-ui-express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
;
require('dotenv').config();

const { MONGO_CONNECT_URL, PORT, HOST } = require('./configs/config');
// // const startCron = require('./cron');
// // const swaggerJson = require('./docs/swagger.json');
const createDefaultData = require('./util/default-data.utils');
const app = express();

mongoose.connect(MONGO_CONNECT_URL).then(() => {
    console.log('Mongo connect successfully');
});
//
app.use(fileUpload({}));
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
const { addressRouter, authRouter, contactRouter, reviewRouter, restorationRouter, userRouter } = require('./routers');
// // app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/address', addressRouter);
app.use('/auth', authRouter);
app.use('/contacts', contactRouter);
app.use('/restorations', restorationRouter);
app.use('/review', reviewRouter);
app.use('/users', userRouter);

app.listen(PORT, HOST, () => {
    console.log(`App listen ${PORT}`);
    createDefaultData();
    // startCron();
});

