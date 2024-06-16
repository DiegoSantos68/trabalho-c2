"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = require("./routes/userRoutes");
const postRoutes_1 = require("./routes/postRoutes");
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// Middlewares
app.use(body_parser_1.default.json());
// Routes
app.use('/', index_1.default);
app.use('/users', userRoutes_1.router);
app.use('/posts', postRoutes_1.router);
exports.default = app;
