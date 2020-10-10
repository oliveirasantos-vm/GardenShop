let open_eye;
let slash_eye;

window.onload = () => {
    let form = document.getElementById('signup-form');
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let cpass = document.getElementById('cpass');

    open_eye = document.getElementById('eye_firstname');
    slash_eye = document.getElementById('eye_lastname');
    open_eye.addEventListener('click', show_pass);
    slash_eye.addEventListener('click', hide_pass);
    open_eye.style.visibility = "visible";
    slash_eye.style.visibility = "hidden";
    let b_fname, b_lname, b_email, b_pass, b_cpass = new Boolean(false);

    var charDefault = /[^a-zà-ú]/gi;
    document.getElementById('btn').addEventListener('click', () => {

    });

}

function hide_pass(){
    slash_eye.style.visibility = "hidden";
    open_eye.style.visibility = "visible";
    document.getElementById('pass').type = 'text';
}
function show_pass(){
    open_eye.style.visibility = "hidden";
    slash_eye.style.visibility = "visible";
    document.getElementById('pass').type = 'password';
    
}

function ValidateName(name, type) {
    switch (name) {
        case '':
            document.getElementById('errors').innerHTML = 'Insira seu ' + type + '.';
            break;
        case /[^a-zà-ú]/gi:
            document.getElementById('errors').innerHTML = 'Nome ' + type + ' possui caracteres inválidos.';
            break;
        default:
            if ('b_fname') { b_fname = true } else if ('b_lname') { b_lname = true }
    }
}



function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value)) {
        b_email = true;
    } else if (mail == '') {
        b_email = false;
        document.getElementById('errors').innerHTML = 'Insira seu Email.';
    } else {
        b_email = false;
    }
}