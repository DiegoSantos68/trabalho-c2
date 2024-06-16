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
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
exports.router = router;
// Rota para criar um novo usuário
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const user = yield prisma.user.create({
            data: {
                username,
            },
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
}));
// Rota para listar todos os usuários
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.json(users);
}));
// Rota para criar um novo post
router.post('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, authorId } = req.body;
    try {
        const post = yield prisma.post.create({
            data: {
                title,
                content,
                author: { connect: { id: Number(authorId) } },
            },
        });
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating post' });
    }
}));
// Rota para listar todos os posts
router.get('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield prisma.post.findMany();
    res.json(posts);
}));
