import express from "express";
import SessionsRouter from './routes/SessionsRouter.js';
import ShiftsRouter from "./routes/ShiftsRouter.js";
import UsersRouter from "./routes/UsersRouter.js"; 
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'; // instalar cookie-parser
import config from './config/config.js';

const app = express();
const PORT = config.app.PORT;

mongoose.connect(config.mongo.URL);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json()); 
app.use(cookieParser());
app.use('/api/sessions', SessionsRouter);
app.use('/api/shifts', ShiftsRouter);
app.use('/api/users', UsersRouter); // Usa las rutas de usuarios