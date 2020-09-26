exports.homePage = (req, res) => {
    res.render('home', {title: 'GardenShop: O mercado para o seu jardim!'});
}
exports.error404 = (req, res) => {
    res.render('404', {title: 'Error 404'});
}