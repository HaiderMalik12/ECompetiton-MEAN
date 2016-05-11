module.exports.participantsList = function(req, res) {
    res.render('index', {
        title: 'Participants'
    });
};

module.exports.signUp = function(req, res) {
    res.render('index', {
        title: 'SignUp'
    });
};

module.exports.signIn = function(req, res) {
    res.render('index', {
        title: 'SignIn'
    });
};

module.exports.participantsUpload = function(req, res) {
    res.render('index', {
        title: 'Upload Your Work'
    });
};