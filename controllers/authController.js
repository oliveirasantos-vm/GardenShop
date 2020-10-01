exports.login = (req, res) => {
    res.render('login', {title: 'GardenShop: Seja bem vindo!'});
}
exports.logout = (req, res) => {
//wait finished login
}
exports.sigin = (req, res) => {
    res.render('sign', {title: 'GardenShop: Cadastre-se para ver mais!'});
}
exports.forgetPass = (req, res) => {
    res.render('home', {title: 'GardenShop: Atualise a sua senha'});
}