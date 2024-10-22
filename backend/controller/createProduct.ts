import { Response , Request} from "express"

export const createProduct = async( req :Request, res:Response)=>{
 const token = req.get('token')
 
 console.log(token)

}