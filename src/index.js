"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./config/express"));
express_1.default.listen(process.env.PORT, () => {
    console.log(`Your app is listening on port ${process.env.PORT} 🌿`);
});
