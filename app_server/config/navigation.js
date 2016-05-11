var navLinks = function() {
    var nav = [{
        Link: '/Participants',
        Text: 'Participant'
    }, {
        Link: '/Voters',
        Text: 'Voter'
    }, {
        Link: '/Organizer',
        Text: 'Organizer'
    }, {
        Link: '/Judges',
        Text: 'Judge'
    }];

    var getNavList = function() {
        return nav;
    };

    return {
        getNavList: getNavList
    };

};

module.exports = navLinks;