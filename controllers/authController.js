const user = require('../models/user');


exports.login = (req, res) => {
    res.render('login', { title: 'GardenShop: Seja bem vindo!' });
}

exports.post_login = (req, res) => {
    res.render('signup', { title: 'GardenShop: Cadastre-se para ver mais!' });
}

exports.signup = (req, res) => {
    res.render('signup', { title: 'GardenShop: Cadastre-se para ver mais!' });
}

exports.post_signup = (req, res) => {
    res.render('signup', { title: 'GardenShop: Cadastre-se para ver mais!' });
}

exports.logout = (req, res) => {
    //aqui ele sai
}

exports.forgetPass = (req, res) => {
    res.render('forgetpass', { title: 'GardenShop: ajudaremos você!' });
}