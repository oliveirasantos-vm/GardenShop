const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const system_module = require('./routes/systemRoute');
app.use(system_module);

app.listen(3000, () => {console.log("Listening in port 3000...")});