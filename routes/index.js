var express = require('express');
var formidable = require('formidable');
var fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/',
function(req, res, next) {
  res.render('index', {
    title: 'ShaderLib'
  });
});

router.post('/reg',
function(req, res) {
  var info = {
	error: null,
	info: null
  };
  // check password is same
  if (req.body.pass != req.body.pass1) {
    info.error = 'passwords are not same.';
	res.send(info);
    return; // res.redirect('/reg');   
  }
  // get encoded password
  var crypto = require('crypto');
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.pass).digest('base64');
  var User = require('../models/user');
  var newUser = new User({
    email: req.body.email,
    name: req.body.uname,
    password: password
  });
  
  //检查用户名是否已经存在
  User.get(newUser.email,
  function(err, user) {
    if (user) {
	  err = 'Username already exists.';
	}
    if (err) {
	  info.error = err;
	  console.log('error : ' + err);
	  //req.flash('error', err);
	  return res.send(info);
    }
    //如果不存在则新增用户
    newUser.save(function(err) {
	  if (err) {
	    info.error = err;
	  } else {
	    info.info = 'register success';
	  }
      req.session.user = newUser;
	  res.send(info);
    });
  });
});

router.post('/login', function(req, res) {
  var crypto = require('crypto');
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.pass).digest('base64');
  var User = require('../models/user');
  var newUser = new User({
    email: req.body.email,
    name: null,
    password: password
  });
  
  //check user email and password
  User.get(newUser.email,
  function(err, userStr) {
    var info = {
      error: null,
      info: null
    };
    if (err) {
      info.error = err;
	  console.log('error : ' + err);
	  //req.flash('error', err);
	  return res.send(info);
    }
	var user = null;
	if (userStr != null) {
	  user = JSON.parse(userStr);
	}
	if (user == null || user.password != password) {
      // wrong password	
	  info.error = 'Invalid email or password.';
	  console.log('error : ' + info.err);
	  return res.send(info);
	}
	info.info = 'login success.';
	newUser.name = user.name;
	req.session.user = newUser;
	res.send(info);
  });
});

router.get('/logout', function(req, res) {
  req.session.user = null;
  res.redirect('/');
});

router.get('/upload',
function(req, res, next) {
  res.render('upload', {
    title: 'ShaderLib'
  });
});

router.post('/upload',
function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = 'public/tmpfiles/';
  form.keepExtensions = true;
  form.maxFieldsSize = 100 * 1024 * 1024;
  form.parse(req, function(err, fields, files) {
    if (err) {
	  console.log('formidable error = ' + err);
	  return;
	}
	// find file id
	var oldPath = files.file_data.path;
	var _start = oldPath.lastIndexOf('upload_');
	if (_start < 0) start = 0;
	var _end = oldPath.lastIndexOf('.fbx');
	if (_end < 0) _end = oldPath.length;
	var fileid = oldPath.substring(_start + 7, _end);
	
	// create dir and rename file to 'fileid' directory
	var newDir = 'public/files/' + fileid;
	fs.mkdirSync(newDir);
	var newPath = newDir + '/' + files.file_data.name;
	fs.renameSync(oldPath, newPath);
	
	// save upload info to db
	var user = req.session.user;
	var asset = user.addUpload(fileid, files.file_data.name, function (err, result) {
      
	});
	req.session.uploading = asset;
    var info = {};
    res.send(info);
  });
});
module.exports = router;