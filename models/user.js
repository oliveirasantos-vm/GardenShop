const mongoose = require('../database');
const answerSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    key:{
        type: String,
    },
    cpf:{
        type: String,
    },
    cep:{
        type: String,
    },
    city:{
        type: String,
        require: true
    },
    admin:{
        type: Boolean,
        require: true
    },
    state:{
        type: Date,
        default: Date.now
    }
})

const answer = mongoose.model('answer', answerSchema);
