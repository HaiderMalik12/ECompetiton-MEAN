module.exports.homelist = function (req, res) {
    res.render('index', {
        title: 'Competitions'
    });
};
module.exports.viewAll = function (req, res) {
    res.render('index', {
        title: 'View All Competitions Admin Panel'
    });
};
module.exports.addCompetition = function (req, res) {
    res.render('index', {
        title: 'Add new Competition'
    });
};