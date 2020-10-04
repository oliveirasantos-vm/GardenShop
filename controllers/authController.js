const user = require('../models/user');


exports.login = (req, res) => {
    
    res.render('login', {title: 'GardenShop: Seja bem vindo!'});
}
exports.logout = (req, res) => {
    //aqui ele sai
}
exports.sigin = (req, res) => {
   ender('sign', {title: 'GardenShop: Cadastre-se para ver mais!'});
}
exports.forgetPass = (req, res) => {
    res.render('forgetpass', {title: 'GardenShop: ESQUEajudaremos você!'});
}