const {loginValidation,signupValidation} = require('../middlewares/auth.validation')
const {signup,login} = require('../controllers/auth.controllers')
const router = require('express').Router();

// router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);


module.exports = router;