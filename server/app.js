import { port, mongoURI } from './config/index';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import corsOptions from './api/middlewares/cors';

// Import Routes
const userLogin = require('./api/routes/user/login');
const userRegister = require('./api/routes/user/register');
const userDelete = require('./api/routes/user/delete');

// Init Express
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

// DB Connect
mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongoose Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/user', userLogin);
app.use('/api/user', userRegister);
app.use('/api/user', userDelete);

app.listen(port, () => console.log(`Server started on port ${port}`));




