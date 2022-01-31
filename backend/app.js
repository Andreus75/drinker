const express = require('express');
const mongoose = require('mongoose');
// // const swaggerUi = require('swagger-ui-express');
// const fileUpload = require('express-fileupload');
// const cors = require('cors');
//
const { MONGO_CONNECT_URL, PORT, HOST } = require('./configs/config');
// // const startCron = require('./cron');
// // const swaggerJson = require('./docs/swagger.json');
//
const app = express();

mongoose.connect(MONGO_CONNECT_URL).then(() => {
    console.log('Mongo connect successfully');
});
//
// app.use(fileUpload({}));
// app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
//
const { userRouter } = require('./routers');
// // app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
    // startCron();
});

