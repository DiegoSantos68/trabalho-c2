"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = require("http");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const server = (0, http_1.createServer)(app_1.default);
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
