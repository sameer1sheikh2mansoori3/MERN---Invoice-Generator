"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json({ limit: "16kb" }));
app.use('/api/v1/user', userRoutes_1.default);
app.use('/api/v1/product', productRoutes_1.default);
app.get('/', (req, res) => {
    const { username, email, password } = req.body.json();
    res.send('hi there');
});
