
module.exports.signUp = function(req, res) {
    res.render('index', {
        title: 'Signup'
    });
};

module.exports.signIn = function(req, res) {
    res.render('index', {
        title: 'SignIn'
    });
};