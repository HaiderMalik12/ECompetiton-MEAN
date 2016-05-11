var express = require('express');
var router = express.Router();

/* Requirring the controller files  */
var ctrlCompetitions = require('../controllers/competitions');
var ctrlParticipants = require('../controllers/participants');
var ctrlJudges = require('../controllers/judges');
var ctrlVoters = require('../controllers/voters');
var ctrlOrganizer = require('../controllers/organizer');

/* Competition pages */
router.get('/Competitions', ctrlCompetitions.homelist);
router.get('/Competitions/viewAll', ctrlCompetitions.viewAll);
router.get('/Competitions/add', ctrlCompetitions.addCompetition);

/* Judges Pages */
router.get('/Judges', ctrlJudges.judgesList);
router.get('/Judges/signUp', ctrlJudges.signUp);
router.get('/Judges/signIn', ctrlJudges.signIn);

/* Participants Pages */
router.get('/Participants', ctrlParticipants.participantsList);
router.get('/Participants/signUp', ctrlParticipants.signUp);
router.get('/Participants/signIn', ctrlParticipants.signIn);
router.get('/Participants/upload', ctrlParticipants.participantsUpload);

/* Organizer Pages */
router.get('/Organizer/signUp', ctrlOrganizer.signUp);
router.get('/Organizer/signIn', ctrlOrganizer.signIn);

/* Voter Pages */
router.get('/Voters/signUp', ctrlVoters.signUp);
router.get('/Voters/signIn', ctrlVoters.signIn);

module.exports = router;