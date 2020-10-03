var express = require('express');
var path = require('path');
var router = express.Router();
var main = require('./main');
var load_infor = require('./loadInfor');

router.get('/', function(req, res){
    console.log('/로 get 방식으로 접근');
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.post('/copy_proj', load_infor);
router.post('/send_fileName', load_infor);

module.exports = router; 