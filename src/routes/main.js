var express =require('express');
var router= express.Router();

const {index,login,register, admin}=require('../controllers/mainController');
const administradorMw = require('../middleware/adminLogMw');

router.get('/',index);
router.get('/login',login);
router.get('/register',register);

router.get('/admin/:adminis',administradorMw,admin);

module.exports=router