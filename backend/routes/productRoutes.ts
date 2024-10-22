import {Router} from 'express'
import { createProduct } from '../controller/createProduct';
const router = Router();
router.route('/products').post(createProduct)
export default router;