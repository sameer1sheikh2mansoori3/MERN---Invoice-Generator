import { IProduct, Product } from "../models/productModel"
import { Request , Response , NextFunction } from "express"
import { ApiResponse } from "../utils/ApiResponse"
import { ApiError } from "../utils/ApiError"

export const getProducts = async(req:Request , res:Response):Promise<any>=>{
    try {
        const products : IProduct[]  =  await Product.find({})
        const apiResponse = new ApiResponse(200 , products , "product fetched successfully")
        return res.status(200).json(apiResponse)
    } catch (error:any) {
        console.log(error.message)
        throw new ApiError(400 , 'found error while fetching products')
    }
}