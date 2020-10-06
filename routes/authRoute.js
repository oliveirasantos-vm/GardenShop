const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/entrar', authController.login);

router.get('/cadastrar', authController.signup);

router.get('/sair', authController.logout);

router.get('/esqueceuasenha', authController.forgetPass);

router.post('/entrar', authController.post_login);

router.post('/cadastrar', authController.post_signup);



module.exports = router;