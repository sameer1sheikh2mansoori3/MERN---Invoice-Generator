"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const ApiResponse_1 = require("../utils/ApiResponse");
const ApiError_1 = require("../utils/ApiError");
const userModel_1 = require("../models/userModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const findUser = yield userModel_1.User.findOne({ email });
        if ((findUser === null || findUser === void 0 ? void 0 : findUser._id) === null) {
            const nouserRes = new ApiResponse_1.ApiResponse(404, {
                findUser
            }, "user not found");
            return res.status(200).json(nouserRes);
        }
        if ((findUser === null || findUser === void 0 ? void 0 : findUser._id) !== null) {
            const userId = (findUser === null || findUser === void 0 ? void 0 : findUser._id.toString()) || "";
            const token = jsonwebtoken_1.default.sign(userId, 'secret');
            const apiResponseUser = new ApiResponse_1.ApiResponse(200, {
                data: token
            }, "welcome back logged in user");
            return res.status(200).json({
                message: apiResponseUser
            });
        }
    }
    catch (error) {
        console.log(error);
        throw new ApiError_1.ApiError(404, "error while login user");
    }
});
exports.loginUser = loginUser;