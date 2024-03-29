const { Router } = require('express');
const playController = require('../controllers/playController');
const { requireAuth, checkUser, levelInfo, stopBanned } = require('../middleware/Middleware')

const router = Router();

router.get('/play-levels', checkUser, requireAuth, stopBanned, levelInfo, playController.play_levels_get)
router.get('/play-levels/:level', checkUser, requireAuth, stopBanned, levelInfo, playController.play_levelnum_get)
router.post('/play', checkUser, requireAuth, stopBanned, levelInfo, playController.play_post);
router.get('/play', requireAuth, stopBanned, levelInfo, playController.play_get);
router.get('/play/thelibrarian', (req, res) => {res.redirect('https://pastebin.com/6KGNd3qE')});
router.get('/play/quicksort42', (req, res) => {res.redirect('https://forms.gle/KexFVRKQh7vA479CA ')});
router.get('/leaderboard', playController.leaderboard_get);
router.get('/getQuestion', requireAuth, stopBanned, levelInfo, playController.question_get);
router.get('/getQuestion/:ques', requireAuth, stopBanned, levelInfo, playController.question_num_get);


module.exports = router;