import mongoose from "mongoose";


interface IUser {
    username: string;
    email: string;
    password: string;
    productArray : IProduct[]
}
interface IProduct {
    productName: string;
    quantity: number;
    productNumber: number;
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
    }

})
const User = mongoose.model<IUser>('User', userSchema);

const productSchema = new mongoose.Schema<IProduct>(
    {
        productName:{
            type:String
        },
         productNumber:{
            type:Number
         },
         quantity:{
            type:Number
         }
    }

)
export { User , productSchema };