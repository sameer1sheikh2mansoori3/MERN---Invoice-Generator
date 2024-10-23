"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createProduct_1 = require("../controller/createProduct");
const authMiddleware_1 = require("../middleware/authMiddleware");
const getProducts_1 = require("../controller/getProducts");
const router = (0, express_1.Router)();
router.post('/create', authMiddleware_1.verifyJWT, createProduct_1.createProduct);
router.get('/bulk', authMiddleware_1.verifyJWT, getProducts_1.getProducts);
exports.default = router;