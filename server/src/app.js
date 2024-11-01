import express from "express";
import __dirname from './utils.js';
import path from "path";
import SessionsRouter from './routes/SessionsRouter.js';
import ShiftsRouter from './routes/ShiftsRouter.js';
import UsersRouter from './routes/UsersRouter.js'; 
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import config from './config/config.js';

// Settings
const app = express();
const PORT = config.app.PORT;
mongoose.connect(config.mongo.URL);
app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cookieParser());

// Routes
app.use('/api/sessions', SessionsRouter);
app.use('/api/shifts', ShiftsRouter);
app.use('/api/users', UsersRouter);

// Static files
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos estáticos desde la carpeta 'public'