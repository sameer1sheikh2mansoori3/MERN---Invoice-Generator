import express, { Express, NextFunction, Request, Response } from 'express'
import { ApiResponse } from './utils/ApiResponse';
import { ApiError } from './utils/ApiError';
import { register } from 'module';
import { registerUser } from './controller/registerUser';
import userRouter from './routes/userRoutes'
import productRouter from './routes/productRoutes'
import connectDB from './db';
import * as dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})

const app: Express = express();
app.use(express.json({ limit: "16kb" }))
connectDB()
app.use('/api/v1/user',
    userRouter
)
app.use('/api/v1/user' , userRouter);
app.use('/api/v1/product' , productRouter);
app.get('/', (req: Request, res: Response) => {
    const { username, email, password } = req.body.json()

    res.send('hi there')
})



const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})