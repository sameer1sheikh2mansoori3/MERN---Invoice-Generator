import mongoose from "mongoose";

import {IProduct} from '../models/productModel'
interface IUser {
    username: string;
    email: string;
    password: string;
    productArray : IProduct[]
}




const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    productArray:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]

})
const User = mongoose.model<IUser>('User', userSchema);



export { User ,IUser  };