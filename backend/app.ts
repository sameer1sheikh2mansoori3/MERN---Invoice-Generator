import express, { Express, NextFunction, Request, Response } from 'express'
import { ApiResponse } from './utils/ApiResponse';
import { ApiError } from './utils/ApiError';
import { register } from 'module';
import { registerUser } from './controller/registerUser';
import userRouter from './routes/userRoutes'
import productRouter from './routes/productRoutes'

const app: Express = express();

app.use(express.json({ limit: "16kb" }))
app.use('/api/v1/user' , userRouter);
app.use('/api/v1/product' , productRouter);




app.get('/', (req: Request, res: Response) => {
    const { username, email, password } = req.body.json()
    res.send('hi there')
})






export {app};