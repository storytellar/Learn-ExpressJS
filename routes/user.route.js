var express = require('express');
var multer = require('multer');

var controller = require('../controllers/user.controller');
var validate = require('../validates/user.validate');
var authMiddleware = require('../middlewares/auth.middleware');

var router = express.Router();
var upload = multer({ dest: './public/uploads' });

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', 
    upload.single('avatar'),
    validate.postCreate,
    controller.postCreate
);

router.get('/:id', controller.get);

module.exports = router;
