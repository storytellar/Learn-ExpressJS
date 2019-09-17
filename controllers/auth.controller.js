const db = require('../db');

module.exports.login = function (req, res) {
    res.render('auth/login');
};

module.exports.postLogin = function (req, res) {
    var errors = [];
    var isSuccess = false;

    var user = db.get('users').find({ email: req.body.email }).value();
    if(!user){
        errors.push('This account does not exists !')
    }
    else if(user.password !== req.body.password){
        errors.push('Password wroooonggg !!!');
    }
    else{
        isSuccess = true;
    }

    if(!isSuccess){
        res.render('auth/login', {
            errors: errors,
            values: req.body
        });
    }
    
    res.cookie('userId', user.id, { signed: true, expires: new Date(Date.now() + 900000) });
    res.redirect('/users');
};