const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const { notFound, errorHandler } = require('./middlewares/errorHandle');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRoute = require('./routes/authRoute');

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// [GET]: /api/user/{}
app.use('/api/user', authRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
