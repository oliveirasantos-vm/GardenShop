const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/entrar', authController.login);

router.get('/cadastrar', authController.sigin);

router.get('/sair', authController.logout);

router.get('/esqueceuasenha', authController.forgetPass);

module.exports = router;