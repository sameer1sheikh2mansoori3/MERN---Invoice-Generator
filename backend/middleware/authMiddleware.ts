import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';

export const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('authorization')
    console.log(token);
    
    res.setHeader('token' , token || "")
    next();


}

