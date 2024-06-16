"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Bem-vindo ao nosso servidor! Acesse /users para criar usuários e /posts para criar posts.');
});
exports.default = router;
