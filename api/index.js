import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';


dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('mongodb está conectado');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('server está rodando na porta 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Erro interno no servidor';
    res.status(statusCode).json ({
        success: false,
        statusCode,
        message
    });
});